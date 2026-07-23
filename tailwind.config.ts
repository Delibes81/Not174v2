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
        primary: {
          DEFAULT: "#4D2323",
          dark: "#2A1313", // A darker shade if needed, but not strictly required
        },
        secondary: {
          DEFAULT: "#1D312B",
        },
        tertiary: {
          DEFAULT: "#CCC3AB",
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
