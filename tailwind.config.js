/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "Helvetica", "Sans-Serif"],
        "palanquin": ["Palanquin", "Helvetica", "Sans-Serif"],
      },
      colors: {
        "light-gray": "#F2F2F2",
      },
      gridTemplateColumns: {
        '3-cols' : 'repeat(3, minmax(200px, 1fr))',
        '4-cols' : 'repeat(4, minmax(200px, 1fr))',
      }
    },
  },
  plugins: [],
}