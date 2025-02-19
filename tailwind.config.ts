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
      fontFamily: {
        jura: ['Jura', 'sans-serif'], 
        'geist-sans': ['var(--font-geist-sans)', 'sans-serif'],
        'geist-mono': ['var(--font-geist-mono)', 'monospace'],
        poppins: ["var(--font-poppins)", "sans-serif"],
        quicksand: ["var(--font-quicksand)", "sans-serif"],
        pacifico: ["var(--font-pacifico)", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
