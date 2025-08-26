cat > tailwind.config.ts << 'EOF'
import type { Config } from 'tailwindcss'

export default <Partial<Config>>({
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx,html}'],
  theme: { extend: {} },
  plugins: [],
})
EOF
git add tailwind.config.ts
git commit -m "build: add Tailwind config"
git push

