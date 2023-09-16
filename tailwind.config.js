/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          indigo: '#6366F1',
          black: '#23272A',
          white: '#F3FAFF',
          slate: '#D9D9D9',
          gray: '#989898',
          blue: '#1C2438',
        },
        secundary: {
          white: '#F3F6FF',
          gray: '#B0B3C3',
          slate: '#EDEDED',
          purple: '#9799FF',
          neutral: '#ACACAC',
          blue: '#151929',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
