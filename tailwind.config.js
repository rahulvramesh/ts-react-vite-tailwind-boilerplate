/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        amber: colors.amber
      },
      fontFamily: {
        firaCode: ['Fira Code'],
        Montserrat: ['Montserrat'],
        Roboto: ['Roboto']
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['active'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
