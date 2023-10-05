/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
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
      screens: {
        '1md': '800px',
        '2.5xl': '1480px',
        '3xl': '1600px',
      },
    },
  },
};
