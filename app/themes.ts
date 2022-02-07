import { createContext } from 'react';

export interface Theme {
  className: string;
  switchLabel: string;
}

export const themes = {
  light: {
    className: 'light-theme',
    switchLabel: 'light mode',
  },
  dark: {
    className: 'dark-theme',
    switchLabel: 'dark mode',
  },
};

export const ThemeContext = createContext({
  theme: <Theme | null>null,
  setTheme: (theme: Theme | null) => {
    console.log(theme);
  },
});
