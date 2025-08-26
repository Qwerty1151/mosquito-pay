// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// Конфиг для Vite + React (swc). Папка сборки — dist (нужно для Vercel).
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Расширения и алиасы
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': path.resolve(process.cwd(), 'src'), // импорт вида: import x from '@/...'
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',       // <-- это важно для Vercel
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
  },
})
