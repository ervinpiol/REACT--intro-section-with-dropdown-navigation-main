/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: ["Epilogue", "sans-serif"],
      colors: {
        AlmostWhite: "hsl(0, 0%, 98%)",
        MediumGray: "hsl(0, 0%, 41%)",
        AlmostBlack: "hsl(0, 0%, 8%)",
        BGOpacity: "rgba(0, 0, 0, 0.5)",
      },
    },
    boxShadow: {
      modalShadow: "0 0 15px #ccc",
      none: "none",
    },
    screens: {
      xl: { max: "1200px" },
      lg: { max: "992px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
