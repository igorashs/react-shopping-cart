import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

export function GlobalTheme({ theme, children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
