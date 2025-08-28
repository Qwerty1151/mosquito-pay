import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        background: 'rgb(var(--background-rgb))',
        foreground: 'rgb(var(--foreground-rgb))',
        primary: 'rgb(var(--primary-rgb))',
        secondary: 'rgb(var(--secondary-rgb))',
        muted: 'rgb(var(--muted-rgb))',
        'muted-foreground': 'rgb(var(--muted-foreground-rgb))',
      },
      boxShadow: {
        lg: '0 10px 20px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
