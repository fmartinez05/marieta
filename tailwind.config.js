/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'marieta-primary': '#2dd4bf', // Un verde azulado (Teal) suave y terapéutico
        'marieta-dark': '#134e4a',
        'marieta-light': '#ccfbf1',
      }
    },
  },
  plugins: [],
}