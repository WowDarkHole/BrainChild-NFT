module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        '85': '0.85'
      },
      minHeight: {
        '192': '48rem',
        '1/2': '50%',
        'screen-1/2': '50vh'
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'scroll-left1': 'scrolling-left1 40s linear infinite',
        'scroll-left2': 'scrolling-left2 40s linear infinite',
        'scroll-left3': 'scrolling-left3 40s 1 linear forwards',
      },
      keyframes: {
        'scrolling-left1': {
          '0%':  { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
        'scrolling-left2': {
          '0%':  { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(-300%)' },
        },
        'scrolling-left3': {
          '0%':  { transform: 'translateX(0%)' },
          '99%': { visibility: 'visible' },
          '100%': { transform: 'translateX(-200%)', visibility: 'hidden' },
        }
      }
    },
  },
  variants: {
    extend: {
      clipPath: ['group-hover'],
      visibility: ['group-hover'],
      transform: ['group-hover'],
      translate: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
