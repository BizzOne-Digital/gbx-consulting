import type { Config } from "tailwindcss";

const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", md: "2rem", lg: "2.5rem" }, screens: { "2xl": "1320px" } },
    extend: {
      colors: {
        forest: c("forest"),
        "forest-dark": c("forest-dark"),
        "forest-deep": c("forest-deep"),
        moss: c("moss"),
        leaf: c("leaf"),
        sage: c("sage"),
        cream: c("cream"),
        ivory: c("ivory"),
        champagne: c("champagne"),
        walnut: c("walnut"),
        wood: c("wood"),
        charcoal: c("charcoal"),
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: { label: "0.28em" },
      boxShadow: {
        lux: "0 30px 60px -25px rgba(3, 41, 31, 0.45)",
        soft: "0 18px 40px -20px rgba(23, 26, 24, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
