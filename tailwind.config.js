/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '3400': '3400ms',
        '4000': '4000ms',
      },
      screens: {
        'xxs': '300px',
        'xs': '450px',
      }
    },
    fontFamily: {
      'display': ['Julius Sans One', 'sans-serif'],
      'body': ['Josefin Sans', 'sans-serif'],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
