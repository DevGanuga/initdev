import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        obsidian: "rgb(var(--color-obsidian) / <alpha-value>)",
        midnight: "rgb(var(--color-midnight) / <alpha-value>)",
        charcoal: "rgb(var(--color-charcoal) / <alpha-value>)",
        steel: "rgb(var(--color-steel) / <alpha-value>)",
        silver: "rgb(var(--color-silver) / <alpha-value>)",
        pearl: "rgb(var(--color-pearl) / <alpha-value>)",
        
        // Accent Colors
        volt: "rgb(var(--color-volt) / <alpha-value>)",
        crimson: "rgb(var(--color-crimson) / <alpha-value>)",
        azure: "rgb(var(--color-azure) / <alpha-value>)",
        gold: "rgb(var(--color-gold) / <alpha-value>)",
        
        // Semantic Colors
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "Menlo", "Monaco", "monospace"],
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
