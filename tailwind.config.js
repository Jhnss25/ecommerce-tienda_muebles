/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        blue: '#037bc0'
      },
      fontFamily: {
        display: "'Playfair Display', serif",
        roboto: "'Roboto', sans-serif"
      }
    },
    backgroundImage: {
      nosotros: 'url(/img/nosotros.jpg)',
    }
  },
  plugins: [],
}

