\
# Apply Vercel/Vite/Tailwind fix-kit
$ErrorActionPreference = "Stop"

Write-Host ">>> Fix-kit: start" -ForegroundColor Cyan

function Write-File($path, $content) {
  $dir = Split-Path $path -Parent
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  Set-Content -Path $path -Value $content -Encoding UTF8
}

# 1) Move public and index if nested in src/
if (Test-Path "src\public") {
  if (-not (Test-Path "public")) { New-Item -ItemType Directory -Path "public" | Out-Null }
  Get-ChildItem "src\public" | Move-Item -Destination "public" -Force
  Remove-Item "src\public" -Force -Recurse
  Write-Host "moved: src/public -> public"
}

if (Test-Path "src\index.html" -and -not (Test-Path "index.html")) {
  Move-Item "src\index.html" "index.html"
  Write-Host "moved: src/index.html -> index.html"
}

# 2) Drop config files
Copy-Item -Force ".\files\postcss.config.cjs" "postcss.config.cjs"
Copy-Item -Force ".\files\tailwind.config.ts" "tailwind.config.ts"
Copy-Item -Force ".\files\vite.config.ts" "vite.config.ts"
Copy-Item -Force ".\files\vercel.json" "vercel.json"
Write-Host "updated: postcss.config.cjs, tailwind.config.ts, vite.config.ts, vercel.json"

# 3) Package.json — ensure scripts and devDeps
$pkgPath = "package.json"
if (-not (Test-Path $pkgPath)) { throw "package.json not found in repo root" }
$pkgRaw = Get-Content $pkgPath -Raw -Encoding UTF8
$pkg = $pkgRaw | ConvertFrom-Json

if (-not $pkg.scripts) { $pkg | Add-Member -MemberType NoteProperty -Name scripts -Value @{} }
$pkg.scripts.dev = "vite"
$pkg.scripts.build = "vite build"
$pkg.scripts.preview = "vite preview --host"

if (-not $pkg.devDependencies) { $pkg | Add-Member -MemberType NoteProperty -Name devDependencies -Value @{} }
$dev = $pkg.devDependencies
$ensure = @{
  "vite" = "^5.4.19";
  "@vitejs/plugin-react-swc" = "^3.7.0";
  "tailwindcss" = "^3.4.10";
  "postcss" = "^8.4.41";
  "autoprefixer" = "^10.4.20";
}
foreach ($k in $ensure.Keys) { $dev.$k = $ensure.$k }

# Write back
$pkg | ConvertTo-Json -Depth 100 | Set-Content -Path $pkgPath -Encoding UTF8
Write-Host "updated: package.json (scripts + devDependencies)"

# 4) Ensure Tailwind directives are present and at the very top of src/styles/globals.css
$glbPath = "src\styles\globals.css"
if (Test-Path $glbPath) {
  $css = Get-Content $glbPath -Raw -Encoding UTF8

  # Remove tailwind v4-only custom variant if present (not supported in v3)
  $css = $css -replace "(?m)^\s*@custom-variant.*\r?\n", ""

  $needBase = ($css -notmatch "(?m)^\s*@tailwind\s+base\s*;")
  $needComponents = ($css -notmatch "(?m)^\s*@tailwind\s+components\s*;")
  $needUtils = ($css -notmatch "(?m)^\s*@tailwind\s+utilities\s*;")

  if ($needBase -or $needComponents -or $needUtils) {
    $directives = "@tailwind base;`n@tailwind components;`n@tailwind utilities;`n"
    # If there is any @tailwind directive already, keep its order. Otherwise, prepend.
    if ($css -match "(?m)^\s*@tailwind\s") {
      # no-op
    } else {
      $css = $directives + "`n" + $css
    }
  }

  Set-Content -Path $glbPath -Value $css -Encoding UTF8
  Write-Host "ensured: @tailwind base/components/utilities in src/styles/globals.css"
} else {
  $content = "/* Tailwind core directives (needed for @layer base/components/utilities) */`n@tailwind base;`n@tailwind components;`n@tailwind utilities;`n"
  Write-File $glbPath $content
  Write-Host "created: src/styles/globals.css with tailwind directives"
}

Write-Host ">>> Fix-kit: done" -ForegroundColor Green
