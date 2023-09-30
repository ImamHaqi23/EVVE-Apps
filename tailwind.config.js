/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        bgOne: '#27292D',
        bgTwo: '#1A1D1F',
        bgThird: '#1A1D1F',
        bgMain: '#040404',
        bgBtn: '#079665',
      },
    },
  },
  plugins: [],
};
