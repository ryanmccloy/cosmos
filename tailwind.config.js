/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2C302E",
        secondary: "#F2F0EF",
        accent: "#5AD14C",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        heading: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
