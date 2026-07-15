import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        notaria: {
          dark: "#2C1E16",
          light: "#FDFBF7",
          gold: "#C5A059",
          muted: "#8A7A6D",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)"],
        sans: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;
