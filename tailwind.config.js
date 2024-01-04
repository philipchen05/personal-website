/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'display': ['Julius Sans One', 'sans-serif'],
      'body': ['Josefin Sans', 'sans-serif'],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}