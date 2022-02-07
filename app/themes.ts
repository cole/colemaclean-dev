import { createContext } from 'react';

export interface Theme {
  name: string;
  className: string;
  switchLabel: string;
  mediaQuery: string;
}

export const themes = {
  light: {
    name: 'light',
    className: 'light-theme',
    switchLabel: 'light mode',
    mediaQuery: '(prefers-color-scheme: light)',
  },
  dark: {
    name: 'dark',
    className: 'dark-theme',
    switchLabel: 'dark mode',
    mediaQuery: '(prefers-color-scheme: dark)',
  },
};

export const ThemeContext = createContext({
  theme: <Theme | null>null,
  setTheme: (theme: Theme | null) => {
    console.log(theme);
  },
});
