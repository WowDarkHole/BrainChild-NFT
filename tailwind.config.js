module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        darkest: '#22262A',
      },
      pink: {
        light: '#FFC6CE',
      }
    },
    extend: {
      screens: {
        'portrait-sm': {'raw': '(orientation: portrait) and (max-width: 768px)'},
        'landscape-sm': {'raw': '(orientation: landscape) and (max-width: 1024px)'},
        'portrait': {'raw': '(orientation: portrait)'},
        'landscape': {'raw': '(orientation: landscape)'},
      },
      transitionProperty: {
        'scaling': 'font-size, font-weight'
      },
      scale: {
        '85': '0.85'
      },
      backdropBlur: {
        '200': '200px',
      },
      width: {
        '18': '4.5rem',
        '22': '5.5rem',
        '112': '28rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
        '240': '60rem',
        'screen-2': '200vw',
      },
      height: {
        '18': '4.5rem',
        '22': '5.5rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
      },
      maxWidth: {
        '320': '80rem',
      },
      minWidth: {
        '60': '15rem',
        '80': '20rem',
        '100': '25rem',
        '120': '30rem',
        '180': '45rem',
        '200': '50rem',
        '240': '60rem',
        '280': '70rem',
      },
      minHeight: {
        '192': '48rem',
        '400px': '400px',
        '500px': '500px',
        '1/2': '50%',
        'screen-1/2': '50vh',
        'screen-1/3': '33vh',
        'screen-2/5': '40vh',
      },
      margin: {
        '84': '21rem',
        '168': '42rem',
        '252': '63rem',
        'screen-1/4': '25vh',
        'screen-1/2': '50vh',
      },
      fontFamily: {
        'cormorant': 'Cormorant Garamond',
        'sora': 'Sora',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-normal': 'spin 10s linear infinite',
        'spin-normal-reverse': 'spin 10s linear infinite reverse',
        'scroll-left1': 'scrolling-left1 40s linear infinite',
        'scroll-left2': 'scrolling-left2 40s linear infinite',
        'scroll-left3': 'scrolling-left3 40s 1 linear forwards',
        wiggle: 'wiggle 0.3s ease-in',
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
        },
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-90deg)' },
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
      animation: ['group-hover'],
      width: ['group-hover'],
      height: ['group-hover'],
      fontSize: ['group-hover'],
      fontWeight: ['group-hover'],
      rotate: ['group-hover'],
    },
  },
  plugins: [],
}
