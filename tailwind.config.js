/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#003366', light: '#1a4d85' }, // Azul
        secondary: { DEFAULT: '#FF6600', dark: '#e65c00' } // Naranja
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}