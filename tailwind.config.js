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
        "pacifico": ["Pacifico", "Helvetica", "Sans-Serif"],
        "montserrat": ["Monserrat", "Helvetica", "san-serif"],
      },
      colors: {
        "light-gray": "#FAFAFA",
      },
      gridTemplateColumns: {
        '3-cols' : 'repeat(3, minmax(100px, 1fr))',
        '4-cols' : 'repeat(4, minmax(100px, 1fr))',
      }
    },
  },
  plugins: [],
}