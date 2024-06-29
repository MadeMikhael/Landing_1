/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      width: '85%',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        primary: "#171717",
        secondary: "#C3FF93",
        card: "#252525",
      },
    },
  },
  plugins: [],
}

