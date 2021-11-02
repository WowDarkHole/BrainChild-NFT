module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        '192': '48rem',
        '1/2': '50%',
        'screen-1/2': '50vh'
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'scroll-left1': 'scrolling-left1 40s linear infinite',
        'scroll-left2': 'scrolling-left2 40s linear infinite',
      },
      keyframes: {
        'scrolling-left1': {
          '0%':  { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scrolling-left2': {
          '0%':  { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-200%)' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
