/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#fff7f5",
          100: "#ffe9e3",
          200: "#ffd3cc",
          300: "#ffb5ab",
          400: "#ff8f8c",
          500: "#fb6f7c"
        },
        cocoa: {
          600: "#7b4b3a",
          700: "#5d3429",
          800: "#3f221d",
          900: "#241311"
        },
        cream: "#fffaf4",
        gold: "#f4c97b"
      },
      fontFamily: {
        display: ["Palatino Linotype", "Book Antiqua", "Palatino", "Georgia", "serif"],
        body: ["Trebuchet MS", "Gill Sans", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        dreamy: "0 24px 80px rgba(137, 72, 92, 0.18)",
        soft: "0 18px 40px rgba(54, 25, 34, 0.12)"
      }
    }
  },
  plugins: []
};
