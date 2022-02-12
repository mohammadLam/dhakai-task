const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        90: '90px'
      }
    },
    colors: {
      ...colors,
      primary: '#01896a',
      'primary-dark': '#006c53',
      'light-two': '#ebebeb',
      'green-light': '#d1ffd0',
      normal: '#2a2a2e',
      light: '#63636a',
      green: '#01896a'
    },

    container: {
      screens: {
        sm: '580px',
        md: '688px',
        lg: '944px',
        xl: '1200px',
        '2xl': '1360px'
      }
    }
  },
  plugins: []
};
