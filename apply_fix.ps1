\
# Apply fix for mosquito-pay Vite landing
Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Write-Host "==> Applying mosquito-pay-v1-fix ..." -ForegroundColor Cyan

$root = Get-Location
if (-not (Test-Path "$root/package.json")) {
  throw "Не найден package.json в текущей папке. Запустите этот скрипт из корня проекта."
}

# 1) Перенести src/public -> public (если есть)
if (Test-Path "src/public") {
  if (-not (Test-Path "public")) { New-Item -ItemType Directory -Path "public" | Out-Null }
  Get-ChildItem "src/public" -Recurse | ForEach-Object {
    $rel = $_.FullName.Substring((Resolve-Path "src/public").Path.Length).TrimStart('\','/')
    $dest = Join-Path "public" $rel
    if ($_.PSIsContainer) {
      if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Path $dest | Out-Null }
    } else {
      $destDir = Split-Path $dest -Parent
      if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir | Out-Null }
      Copy-Item $_.FullName $dest -Force
    }
  }
  Remove-Item "src/public" -Recurse -Force
  Write-Host "Moved src/public -> public/"
}

# 2) Удалить лишние файлы из src/
$removeList = @(
  "src/package.json",
  "src/index.html",
  "src/vite.config.ts",
  "src/postcss.config.js",
  "src/tsconfig.json",
  "src/tsconfig.node.json",
  "src/vercel.json",
  "src/.eslintrc.cjs",
  "src/.gitignore",
  "src/README.md",
  "src/Attributions.md"
)
$removed = @()
foreach ($p in $removeList) { if (Test-Path $p) { Remove-Item $p -Force; $removed += $p } }
if ($removed.Count -gt 0) { Write-Host "Removed:"; $removed | ForEach-Object { Write-Host " - $_" } }

# 3) Скопировать исправленные конфиги
Copy-Item -Force "files/vite.config.ts" "./vite.config.ts"
Copy-Item -Force "files/postcss.config.js" "./postcss.config.js"
Copy-Item -Force "files/tailwind.config.ts" "./tailwind.config.ts"
Copy-Item -Force "files/vercel.json" "./vercel.json"

# 4) Обеспечить src/index.css с директивами Tailwind
if (-not (Test-Path "src")) { New-Item -ItemType Directory -Path "src" | Out-Null }
$indexCssPath = "src/index.css"
if (-not (Test-Path $indexCssPath)) {
  Copy-Item "files/src/index.css" $indexCssPath -Force
} else {
  $css = Get-Content $indexCssPath -Raw
  if ($css -notmatch "@tailwind\s+base") {
    Add-Content $indexCssPath "`n@tailwind base;"
    Add-Content $indexCssPath "`n@tailwind components;"
    Add-Content $indexCssPath "`n@tailwind utilities;"
  }
}

# 5) Вставить импорт './index.css' в src/main.tsx, если нет
$mainPath = "src/main.tsx"
if (Test-Path $mainPath) {
  $main = Get-Content $mainPath -Raw
  if ($main -notmatch "import\s+['""]\.\/index\.css['""]") {
    Set-Content $mainPath ("import './index.css';`n" + $main)
    Write-Host "Added import './index.css' to src/main.tsx"
  }
}

# 6) Патч package.json: скрипты и devDependencies
function Update-PackageJson {
  param([string]$pkgPath)
  $pkgText = Get-Content $pkgPath -Raw
  $pkg = $pkgText | ConvertFrom-Json

  if (-not $pkg.scripts) { $pkg | Add-Member -NotePropertyName scripts -NotePropertyValue (@{}) }
  $pkg.scripts.dev = "vite"
  $pkg.scripts.build = "vite build"
  if (-not $pkg.scripts.preview) { $pkg.scripts.preview = "vite preview --port 4173" }

  if (-not $pkg.devDependencies) { $pkg | Add-Member -NotePropertyName devDependencies -NotePropertyValue (@{}) }
  $dev = $pkg.devDependencies
  if (-not $dev."vite") { $dev."vite" = "^5.4.19" }
  if (-not $dev."@vitejs/plugin-react-swc") { $dev."@vitejs/plugin-react-swc" = "^3.10.2" }
  if (-not $dev."tailwindcss") { $dev."tailwindcss" = "^3.4.10" }
  if (-not $dev."autoprefixer") { $dev."autoprefixer" = "^10.4.20" }
  if (-not $dev."postcss") { $dev."postcss" = "^8.4.45" }
  if (-not $dev."tailwindcss-animate") { $dev."tailwindcss-animate" = "^1.0.7" }

  ($pkg | ConvertTo-Json -Depth 100) | Set-Content $pkgPath -Encoding UTF8
  Write-Host "Patched package.json scripts and devDependencies."
}
Update-PackageJson -pkgPath "package.json"

Write-Host "==> Fix applied. Next steps:"
Write-Host "  npm i"
Write-Host "  git add -A && git commit -m 'chore: apply mosquito-pay-v1-fix' && git push" -ForegroundColor Yellow
