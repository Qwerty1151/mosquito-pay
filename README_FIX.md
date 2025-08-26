# Mosquito Pay — Vercel/Vite/Tailwind Fix Kit

Что делает этот набор:
- Приводит проект к корректной для Vercel структуре (корневой `index.html`, сборка в `dist/`).
- Добавляет/исправляет конфиги Vite, Tailwind и PostCSS (CJS), SPA‑роутинг `vercel.json`.
- Обновляет `package.json` (vite, @vitejs/plugin-react-swc, tailwindcss, postcss, autoprefixer).
- Безопасно добавляет в `src/styles/globals.css` строки `@tailwind base; @tailwind components; @tailwind utilities;` (если их нет) — визуальный дизайн не меняется.

## Быстрый запуск (Windows)

1. Откройте *Git Bash* или *PowerShell* в корне репо (там, где лежит `.git/`).
2. Запустите:
   - `apply_fix.cmd` (для Windows) **или**
   - `powershell -ExecutionPolicy Bypass -File .\apply_fix.ps1`

Скрипт:
- Переместит `src/public` → `public` (если есть).
- Переместит `src/index.html` → `index.html` (если есть).
- Скопирует/перезапишет конфиги из папки `files/`.
- Поправит/создаст `src/styles/globals.css` с таилвинд директивами.
- Допишет зависимости в `package.json` и скрипты сборки.
- Создаст коммит с сообщением `build: apply Vite/Tailwind/Vercel fix`.

Затем выполните:
```
git push
```
И на Vercel нажмите **Redeploy**.

## Если нужен откат
Сделайте `git revert` соответствующего коммита или удалите созданные файлы вручную.
