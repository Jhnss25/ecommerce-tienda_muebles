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
      },
      backgroundImage: {
        nosotrosTel: "linear-gradient(to bottom, transparent 0%, transparent 50%, #037bc0 50%) ,url(/img/nosotros.jpg)",
        nosotrosTable: "linear-gradient(to right, transparent 0%, transparent 50%, #037bc0 50%), url(/img/nosotros.jpg)",
      },
      backgroundColor: {
        dark: 'rgb(0 0 0 / .95)'
      }
    }
  },
  plugins: [],
}