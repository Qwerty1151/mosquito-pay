import type { Config } from "tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // Keep visual baseline as in your custom styles (avoid Tailwind Preflight resets)
  corePlugins: { preflight: false },
  plugins: [],
} satisfies Config;
