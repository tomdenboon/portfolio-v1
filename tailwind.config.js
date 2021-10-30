const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray, 
        green: colors.green
      },
    },
  },
  variants: {
    extend: {
      opacity: ['active'],
      textColor: ['active'],
      translate: ['group-hover'],
      borderRadius: ['hover', 'focus'],
    },
  },
  plugins: [],
}
