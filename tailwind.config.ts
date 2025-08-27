/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "./messages/**/*.json"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        ring: "var(--ring)"
      },
      borderRadius: {
        xl: "var(--radius)",
        "2xl": "calc(var(--radius) + 0.375rem)",
        "3xl": "calc(var(--radius) + 0.75rem)"
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.12)",
        card: "0 4px 14px rgba(0,0,0,0.10)"
      },
      container: { center: true, padding: { DEFAULT: "1rem", md: "2rem" } }
    }
  },
  plugins: []
};
