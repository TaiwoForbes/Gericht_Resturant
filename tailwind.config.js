/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        golden: "#DCCA87",
        black: "#0C0C0C",
        gray: "#545454",
        crimson: "#F5EFDB",
        grey: "#AAAAAA",
      },
      fontFamily: {
        cormorant: ["Cormorant Upright", "sans-serif"],
      },
      backgroundImage:{
        image: "url('/src/assets/bg.png')"
      }
      
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};