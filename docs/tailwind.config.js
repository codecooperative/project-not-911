const jekyllEnv = process.env.JEKYLL_ENV || "development";
const baseSans = ["Helvetica Neue", 'HelveticaNeue', 'Helvetica', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"];

module.exports = {
  purge: {
    enabled: true, //jekyllEnv === 'production',
    content: ['./**/*.markdown'],
  },
  separator: ':',
  // blacklisted plugins
  corePlugins: {
    backgroundPosition: false,
    backgroundSize: false,
    clear: false,
    fill: false,
    float: false,
    gap: false,
    gridAutoFlow: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    gridTemplateColumns: false,
    gridTemplateRows: false,
    fontSmoothing: false,
    listStylePosition: false,
    objectFit: false,
    objectPosition: false,
    placeholderColor: false,
    placeholderOpacity: false,
    resize: false,
    rotate: false,
    scale: false,
    space: false,
    skew: false,
    stroke: false,
    strokeWidth: false,
    tableLayout: false,
  },
  theme: {
    screens: {
      d: '1024px',
    },
    colors: {
      black: '#000',
      white: '#fff',

      gray: '#374152',
      gray2: '#292929',

      mint: '#a3eeaa',
      blue: '#3333ff',
    },
    spacing: {
      '0': '0',
      '1/2': '.25rem',
      '1': '.5rem',
      '2': '1rem',
      '3': '2rem',
      '4': '3rem',
      '5': '4rem',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      '0': 'transparent',
    }),
    backgroundPosition: {},
    backgroundSize: {},
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.3', 'currentColor'),
    }),
    borderRadius: {
      'default': '.25rem',
      '0': '0',
      lg: '.5rem',
      circ: '50%', // circle
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    cursor: {
      default: 'default',
      ptr: 'pointer',
      disabled: 'not-allowed',
    },
    fill: {},
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      '0': '0',
      default: '1',
    },
    flexShrink: {
      '0': '0',
      default: '1',
    },
    fontFamily: {
      founders: ['Founders', ...baseSans],
      sans: baseSans,
    },
    // numbers => header sizes basically
    // base default size everywhere
    // sm => small html tag
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      3: '1.25rem',
      2: '1.5rem',
      1: '2rem',
    },
    fontWeight: {
      normal: '400',
      semibold: '500',
      bold: '700',
    },
    inset: { },
    letterSpacing: {
      none: '0',
    },
    lineHeight: {
      none: '1',
      tight: '1.2',
      normal: '1.5',
      loose: '1.7',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
    }),
    maxHeight: {
      full: '100%',
      screen: '100vh',
    },
    minHeight: {
      '0': '0',
      full: '100%',
      halfscreen: '50vh',
      screen: '100vh',
    },
    objectPosition: {},
    opacity: {
      '0': '0',
      '5': '0.5',
      '10': '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
    },
    padding: theme => theme('spacing'),
    placeholderColor: {}, // theme => theme('colors'),
    stroke: {},
    strokeWidth: {},
    textColor: theme => theme('colors'),
    textTransform: {},
    width: theme => ({
      auto: 'auto',
      '1/12': '8.333%',
      '2/12': '16.666%',
      '3/12': '25%',
      '4/12': '33.333%',
      '5/12': '41.666%',
      '6/12': '50%',
      '7/12': '58.333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
    }),
    minWidth: theme => ({
      ...theme('width'),
      '0': '0',
    }),
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      full: '100%',
      ...theme('width'),
    }),
    zIndex: {
      auto: 'auto',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
    },
    transitionProperty: {
      default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      all: 'all',
    },
    transitionTimingFunction: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    transitionDuration: {
      '150': '150ms',
      '300': '300ms',
    },
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    backgroundColor: ['hover'],
    borderColor: ['hover'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontStyle: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    margin: ['responsive'],
    maxWidth: ['responsive'],
    minWidth: ['responsive'],
    order: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    textAlign: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },
  plugins: [],
}
