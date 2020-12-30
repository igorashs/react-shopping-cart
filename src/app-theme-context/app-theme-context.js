import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { useContext, createContext } from 'react';
import { useTheme } from './useTheme';

const AppThemeContext = createContext();

function AppThemeProvider({ children }) {
  const [theme, changeTheme] = useTheme();

  return (
    <AppThemeContext.Provider value={changeTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}

function useChangeTheme() {
  const context = useContext(AppThemeContext);

  if (!context) {
    throw new Error('useChangeTheme must be used within a AppThemeProvider');
  }

  return context;
}

export { AppThemeProvider, useChangeTheme };
