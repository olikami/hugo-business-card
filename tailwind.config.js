const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend:{
      colors: {
        'grey': colors.trueGray,
        gray: colors.coolGray
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
