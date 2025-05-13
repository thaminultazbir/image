 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        custom:['"Titillium Web"','sans-serif']
      },
      colors:{
        'linkedin': '#1469C7',
        'facebook': '#1BA7FB',
        'instagram': '#F04977',
        'pintarest': '#E70820',
      },
    },
  },
  plugins: [],
}