/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          100: '#000000',
          200: '#03050a',
          300: '#080a0f',
          400: '#0d0f14',
          500: '#121419',
          600: '#17191e',
          700: '#212328',
          800: '#2b2d32',
          900: '#35373c',
        },
        brand: {
          100: '#1281e7',
          200: '#1c8bf1',
          300: '#2190f6',
          400: '#2695fb',
          500: '#2b9aff',
          600: '#309fff',
          700: '#3aa9ff',
          800: '#44b3ff',
          900: '#4ebdff',
        },
        txt: {
          100: '#ffffff',
          200: '#e4e7f0',
          300: '#d5dbe8',
          400: '#c1c8d9',
          500: '#afb8cc',
          600: '#9ba5bd',
          700: '#868fa3',
          800: '#787f8f',
          900: '#696f7d',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
