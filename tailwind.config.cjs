/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'paletaA': '#22577a',
        'paletaB': '#38a3a5',
        'paletaC': '#57cc99',
        'paletaE': '#ebffed',
      }
    },
  },
  plugins: [require('tailwindcss-primeui')], //
}