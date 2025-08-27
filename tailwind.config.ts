import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1280px" } },
    extend: {
      colors: {
        primary:"#2563EB", secondary:"#0EA5E9", accent:"#22C55E", muted:"#64748B",
        deep:"#0A1B2E", foreground:"#0F172A", background:"#FFFFFF", border:"#E2E8F0",
        warning:"#F59E0B", danger:"#EF4444", success:"#10B981"
      },
      fontFamily: { sans: ["Inter","ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto","Noto Sans","Ubuntu","Cantarell","Helvetica Neue","Arial","sans-serif"] },
      borderRadius: { xl:"1rem","2xl":"1.25rem","3xl":"1.5rem" },
      boxShadow: { card:"0 10px 25px rgba(0,0,0,0.08)", soft:"0 2px 8px rgba(0,0,0,0.06)" }
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
