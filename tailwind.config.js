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
      height: {
        68: '17rem',
        108: '27rem',
      },
      width: {
        68: '17rem',
        108: '27rem',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
