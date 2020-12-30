// default
const BREAKPOITNS = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

const COLORS = {
  primary: '#364d7d',
  secondary: '#e0b652',
  secondaryLight: '#e8c87d',
  secondaryDark: '#d9a326',
  bodyBg: '#f2f2f2',
  bodyColor: '#282828',
  bodyAccent: '#644b12',
  textPrimary: '#f2f2f2',
  textSecondary: '#141414'
};

const TYPOGRAPHY = {
  bodyFontFamily: "'Press Start 2P', sans-serif",
  headersFontFamily: "'Press Start 2P', sans-serif",
  bodyText: '16px',
  bodyFontWeight: 400,
  bodyLineHeight: 1.75,
  headersLineHeight: 1.3,
  headersFontWeight: 400,
  textScale: 1.333
};

/**
 * @param {*} options to be merged with default
 * @returns {*} theme
 */
export function createTheme(name = 'default', options = {}) {
  return {
    name,
    breakpoints: { ...BREAKPOITNS },
    ...COLORS,
    ...TYPOGRAPHY,
    ...options
  };
}
