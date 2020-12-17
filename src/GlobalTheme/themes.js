const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

const colors = {
  textPrimary: '#383838',
  textSecondary: '#282828',
  secondary: '#69d484',
  primary: '#fff'
};

const typography = {
  bodyFontFamily: "'Press Start 2P', sans-serif",
  headersFontFamily: "'Press Start 2P', sans-serif",
  bodyText: '16px',
  bodyFontWeight: 400,
  bodyLineHeight: 1.75,
  headersLineHeight: 1.3,
  headersFontWeight: 400,
  textScale: 1.333
};

// default themes
export const defaultTheme = {
  breakpoints: { ...breakpoints },
  ...colors,
  ...typography
};

export const darkTheme = {
  breakpoints: { ...breakpoints },
  textPrimary: '#fff',
  textSecondary: '#fff',
  secondary: '#2f3594;',
  primary: '#282828',
  ...typography
};
