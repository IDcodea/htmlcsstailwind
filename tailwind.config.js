/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'green': '#0dad8e'
      },
      textColor: {
        'green': '#0dad8e',
        'blue': '#0038de'
      },
    },
  },
  plugins: [],
}