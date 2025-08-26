# Mosquito Pay — Fix Kit for Vercel (Vite + React + Tailwind)

Что делает:
- Выставляет Vite-конфиг с `dist/` и alias `@` → `src`
- Переводит PostCSS-конфиг в CJS (без ESM-глюков на Vercel)
- Добавляет `tailwindcss`, `postcss`, `autoprefixer` в devDependencies
- Добавляет `@tailwind base/components/utilities` в `src/styles/globals.css` (если их нет) — **без изменения твоих кастомных слоёв**
- Отключает Tailwind Preflight (`corePlugins.preflight = false`) — чтобы не влияло на базовую типографику/normalize

## Применение
1. Скопируй содержимое архива в корень репозитория (рядом с `.git/`).
2. Запусти `apply_fix.cmd` (Windows) или `apply_fix.ps1` через PowerShell.
3. Дай скрипту завершиться (он выведет лог), затем:
   ```bash
   git add -A
   git commit -m "build: apply Vercel/Tailwind/Vite fix"
   git push
   ```
4. На Vercel нажми **Redeploy**.

Если есть `src/public`, он будет перемещён в `public`. Если `src/index.html` — будет перемещён в корень (`./index.html`).

## Требования
- Node 18+ локально (для разработки). На Vercel всё настроится автоматически.
