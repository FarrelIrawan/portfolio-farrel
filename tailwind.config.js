/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#eab308',
        txt: '#fde047',
        thirdly: '#334155',
      },
      fontFamily: {
        raleway: ["Raleway"],
      },
      screens: {
        'xl': '1280',
      },
    },
  },
  plugins: [],
}
