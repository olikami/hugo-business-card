const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./hugo_stats.json'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend:{
      colors: {
        'grey': colors.trueGray,
        gray: colors.coolGray
      },
      fontSize: {
        'xxs': '.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
