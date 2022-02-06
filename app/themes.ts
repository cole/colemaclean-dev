import { createContext } from 'react';

export const themes = {
  light: {
    name: 'light',
  },
  dark: {
    name: 'dark',
  },
};

export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});
