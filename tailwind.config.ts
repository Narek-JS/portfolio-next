import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "auto-scroll": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(calc(-100% + 350px))" },
        },
      },
      animation: {
        "auto-scroll": "auto-scroll 5s linear forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
