const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./hugo_stats.json', './exampleSite/hugo_stats.json'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend:{
      colors: {
        'grey': colors.trueGray,
        gray: colors.coolGray
      },
      fontSize: {
        'xxs': '.5rem'
      },
      keyframes: {
        colors: {
          '0%, 100%': { 'background-color': '#7df9ff' },
          '16.667%': { 'background-color': '#ff4911' },
          '33.333%': { 'background-color': '#2fff2f' },
          '50%': { 'background-color': '#3300ff' },
          '66.667%': { 'background-color': '#ffff00' },
          '84.333%': { 'background-color': '#ff00f5' }
        },
        colorsBorder: {
          '0%, 100%': { 'border-color': '#7df9ff' },
          '16.667%': { 'border-color': '#ff4911' },
          '33.333%': { 'border-color': '#2fff2f' },
          '50%': { 'border-color': '#3300ff' },
          '66.667%': { 'border-color': '#ffff00' },
          '84.333%': { 'border-color': '#ff00f5' }
        },
        colorsImg: {
          '0%': { 'filter': 'hue-rotate(0deg)',},
          '50%': { 'filter': 'hue-rotate(180deg)' },
          '100%': { 'filter': 'hue-rotate(360deg)' }
        }
      },
      animation: {
        'crazy': 'colors 1s linear infinite',
        'crazy-border': 'colorsBorder 1s linear infinite',
        'crazyimg': 'colorsImg 1s linear infinite'
      },
      fontFamily: {
        'neo': ['"Lexend Mega"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
