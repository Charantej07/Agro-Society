/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'agro': {
          100: '#71b340',
          200: '#669d31',
          300: '#598b2c',
          400: '#3c5a14',
          500: '#103b03',
          600: '#11270b',
        },
      },
    },
  },
  plugins: [],
}

