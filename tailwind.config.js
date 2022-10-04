/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      black: {
        100: "#333333",
        200: "#000"
      },
      yellow: {
        100: "#FFE896",
        200: "#FFC13F",
        300: "#FFD850"
      },
      gray: "#746F6F",
      white: "#fff",
      transparent: "transparent",
      red: "#D63C5E",
      orange: "#F99042"
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      londrina: ["Londrina Solid", "cursive"]
    }
  },
  plugins: [require("tailwindcss"), require("autoprefixer")]
}
