import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1d1b18",
        charcoal: "#24211e",
        paper: "#f8f5ee",
        stone: "#eee8dd",
        bronze: "#8a6849"
      },
      fontFamily: {
        title: ["var(--font-title)", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "Aptos", "sans-serif"],
        display: ["var(--font-title)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Inter", "Aptos", "sans-serif"]
      },
      boxShadow: {
        soft: "0 28px 80px rgba(22, 21, 20, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
