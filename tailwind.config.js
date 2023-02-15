/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
          wiggle: 'wiggle 0.5s alternate infinite',
      },
      keyframes: {
        wiggle: {
          'from': { transform: 'translateY(50px)' },
          'to': { transform: 'translateY(0px)' },      
        }
      },
      
    },
  },
  plugins: [],
}