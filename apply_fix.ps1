\
#Requires -Version 5
$ErrorActionPreference = "Stop"

function Write-Info($msg){ Write-Host "==> $msg" -ForegroundColor Cyan }

$repo = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repo

$files = Join-Path $repo "files"

# 1) Структура: public/, index.html в корне
if (Test-Path "src\public") {
  Write-Info "Moving src/public -> public"
  if (Test-Path "public") { Remove-Item -Recurse -Force "public" }
  Move-Item "src\public" "public"
}
if (Test-Path "src\index.html") {
  Write-Info "Moving src/index.html -> index.html"
  if (Test-Path "index.html") { Remove-Item -Force "index.html" }
  Move-Item "src\index.html" "index.html"
}

# 2) Конфиги
Write-Info "Copy Tailwind/PostCSS/Vite/Vercel configs"
Copy-Item "$files\postcss.config.cjs" -Destination "$repo\postcss.config.cjs" -Force
Copy-Item "$files\tailwind.config.ts" -Destination "$repo\tailwind.config.ts" -Force
Copy-Item "$files\vite.config.ts" -Destination "$repo\vite.config.ts" -Force
Copy-Item "$files\vercel.json" -Destination "$repo\vercel.json" -Force

# 3) package.json
if (!(Test-Path "package.json")) {
  throw "package.json not found in repo root"
}
Write-Info "Patch package.json"
$p = Get-Content "package.json" -Raw | ConvertFrom-Json

if (-not $p.scripts) { $p | Add-Member -Name scripts -Value (@{}) -MemberType NoteProperty }
$p.scripts.dev    = "vite"
$p.scripts.build  = "vite build"
$p.scripts.preview= "vite preview --host"

# ensure deps
function Ensure-Dep($obj, $name, $version) {
  if (-not $obj.$name) { $obj | Add-Member -Name $name -Value $version -MemberType NoteProperty }
  else { $obj.$name = $version }
}

if (-not $p.devDependencies) { $p | Add-Member -Name devDependencies -Value (@{}) -MemberType NoteProperty }
Ensure-Dep $p.devDependencies "vite" "^5.4.19"
Ensure-Dep $p.devDependencies "@vitejs/plugin-react-swc" "^3.7.0"
Ensure-Dep $p.devDependencies "tailwindcss" "^3.4.10"
Ensure-Dep $p.devDependencies "postcss" "^8.4.47"
Ensure-Dep $p.devDependencies "autoprefixer" "^10.4.20"
# чаще всего react и react-dom присутствуют в dependencies; если нет — добавим
if (-not $p.dependencies) { $p | Add-Member -Name dependencies -Value (@{}) -MemberType NoteProperty }
if (-not $p.dependencies.react) { $p.dependencies.react = "^18.3.1" }
if (-not $p.dependencies."react-dom") { $p.dependencies."react-dom" = "^18.3.1" }

($p | ConvertTo-Json -Depth 100) | Set-Content "package.json" -Encoding UTF8

# 4) Tailwind directives в globals.css
$globals = "src\styles\globals.css"
if (!(Test-Path $globals)) {
  Write-Info "Create src/styles/globals.css with Tailwind core directives"
  New-Item -ItemType Directory -Force -Path "src\styles" | Out-Null
  @"
@tailwind base;
@tailwind components;
@tailwind utilities;

/* your styles below */
"@ | Set-Content $globals -Encoding UTF8
}
else {
  $content = Get-Content $globals -Raw
  $needs = @("@tailwind base;", "@tailwind components;", "@tailwind utilities;") | Where-Object { $content -notmatch [regex]::Escape($_) }
  if ($needs.Count -gt 0) {
    Write-Info "Prepend Tailwind directives to src/styles/globals.css"
    $new = "@tailwind base;`n@tailwind components;`n@tailwind utilities;`n`n" + $content
    Set-Content $globals $new -Encoding UTF8
  }
}

# 5) Git commit
git add -A | Out-Null
git commit -m "build: apply Vite/Tailwind/Vercel fix" | Out-Null
Write-Info "Done. Now run: git push"
