/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        teal: '#2F6C6D',
        hummingbird: '#d1f1ee',
        yellow: '#4ed63b',
        solitude: '#e9e9ea',
        gray: '#4B4B4C',
      },
      animation: {
        slide: 'slide 25s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(5%)' },
          '100%': { transform: 'translateX(-120%)' },
        },
      },
    },
  },

  plugins: [],
};
