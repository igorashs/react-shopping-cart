import { useState, useEffect } from 'react';
import { createTheme } from './createTheme';

const Themes = [
  createTheme('default'),

  createTheme('darkTheme', {
    primary: '#145052',
    secondary: '#521C40',
    secondaryLight: '#852e68',
    secondaryDark: '#4c1a3b',
    bodyBg: '#282828',
    bodyColor: '#fff',
    bodyAccent: '#dea0ca',
    textPrimary: '#fff',
    textSecondary: '#fff'
  }),

  createTheme('forestTheme', {
    primary: '#4abf40',
    secondary: '#BF4737',
    secondaryLight: '#cb5c4d',
    secondaryDark: '#8a3428',
    bodyBg: '#256020',
    bodyColor: '#fff',
    bodyAccent: '#e7b3ac',
    textPrimary: '#0c1f0a',
    textSecondary: '#fff'
  })
];

export const useTheme = () => {
  const [theme, setTheme] = useState(Themes[0]);

  const changeTheme = (name) => {
    const theme = Themes.find((t) => t.name === name);

    if (theme) {
      setTheme(theme);
      localStorage.setItem('theme', name);
    }
  };

  useEffect(() => {
    const name = localStorage.getItem('theme');

    if (name) {
      changeTheme(name);
    }
  }, []);

  return [theme, changeTheme];
};
