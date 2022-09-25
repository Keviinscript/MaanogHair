/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      arima: [ 'Arima Madurai', 'cursive'],
      Aboreto: [ 'Noto Serif JP', 'serif'],
      Alumini : [ 'Alumni Sans Pinstripe', 'sans-serif']
    },
    extend: {
       colors: {
        'coral-pink': '#ffe4e1',
        'claret': '#702737',
        'graybg': '#eee',
        'orangecols':'#fc7b54'

      },
    },
  },
  plugins: [],
}
