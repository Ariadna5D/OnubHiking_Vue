import PrimeUI from 'tailwindcss-primeui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '.my-app-dark'],  // Cambia de 'class' a selector explícito
  theme: {
    extend: {},
  },
  plugins: [PrimeUI],  // ← AÑADE ESTO
}
