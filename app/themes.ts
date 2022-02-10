import { createContext, useState, useEffect } from 'react';
import { themeCookie } from '~/cookies';

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

type ThemeName = 'light' | 'dark' | null;

export const ThemeContext = createContext({
  theme: <Theme | null>null,
  setTheme: (theme: ThemeName) => {},
});

export function useTheme(
  themeName: ThemeName,
): [Theme | null, (theme: ThemeName) => void] {
  const initialTheme = themeName ? themes[themeName] : null;
  const [theme, setThemeValue] = useState<Theme | null>(initialTheme);
  const [cookieData, setCookieData] = useState('');

  const setTheme = (theme: ThemeName) => {
    setThemeValue(theme ? themes[theme] : null);
    themeCookie.serialize({ theme }).then(setCookieData);
  };

  useEffect(() => {
    if (cookieData !== '') {
      document.cookie = cookieData;
    }
  }, [cookieData]);

  return [theme, setTheme];
}
