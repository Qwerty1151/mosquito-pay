# mosquito-pay-v1-fix

Назначение: быстро привести Vite-лендинг в корректное состояние для деплоя на Vercel.
Скрипт **apply_fix.ps1**:
- удалит вложенный шаблон из `src/` (если он остался);
- перенесёт `src/public` в корень `public/`;
- положит исправленные конфиги (`vite.config.ts`, `postcss.config.js`, `tailwind.config.ts`, `vercel.json`);
- добавит/обновит скрипты в `package.json` и нужные devDependencies (tailwind/postcss/autoprefixer/@vitejs/plugin-react-swc/vite);
- вставит импорт `./index.css` в `src/main.tsx`, если его нет;
- создаст `src/index.css` с директивами Tailwind, если файла не было.

## Как запускать (Windows)

1. Распакуйте архив в корень проекта (где лежит ваш `package.json`).
2. Запустите PowerShell от имени пользователя и выполните:
   ```
   Set-ExecutionPolicy -Scope Process Bypass
   .\apply_fix.ps1
   ```
   или двойным кликом `apply_fix.cmd`.

3. Установите зависимости (локально, чтобы обновился lockfile) и закоммитьте:
   ```
   npm i
   git add -A
   git commit -m "chore: apply mosquito-pay-v1-fix"
   git push
   ```

Vercel автоматически пересоберёт проект. 
