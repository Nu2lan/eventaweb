/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#121212",
          foreground: "#f9f8f7",
        },
        secondary: {
          DEFAULT: "#d1a84b",
          foreground: "#000000",
        },
        background: "#f9f8f7",
        foreground: "#121212",
      },
    },
  },
  plugins: [],
};
