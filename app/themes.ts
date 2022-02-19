import { createContext, useEffect, useState } from 'react';

export interface Theme {
  name: string;
  className: string;
  switchLabel: string;
  mediaQuery: string;
}

export const THEMES = {
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
});

export const useDefaultTheme = () => {
  const [defaultTheme, setDefaultTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const darkMediaQuery = window.matchMedia(THEMES.dark.mediaQuery);
    const updatePreferredDefaultTheme = (
      event: MediaQueryList | MediaQueryListEvent,
    ) => {
      setDefaultTheme(event.matches ? THEMES.dark : THEMES.light);
    };
    updatePreferredDefaultTheme(darkMediaQuery);
    darkMediaQuery.addEventListener('change', updatePreferredDefaultTheme);
  });

  return defaultTheme;
};
