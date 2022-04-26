import { useFetcher } from '@remix-run/react';
import type { Dispatch, SetStateAction } from 'react';
import { createContext, useEffect, useRef, useState } from 'react';

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}
const themes: Array<Theme> = Object.values(Theme);

type ThemeStateType = [Theme | null, Dispatch<SetStateAction<Theme | null>>];
type ThemeContextType = {
  theme: Theme | null;
  setTheme: Dispatch<SetStateAction<Theme | null>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: null,
  setTheme: () => {},
});

const prefersDarkMQ = '(prefers-color-scheme: dark)';

export const getPreferredTheme = (): Theme => {
  return window.matchMedia(prefersDarkMQ).matches ? Theme.DARK : Theme.LIGHT;
};

export function isTheme(value: unknown): value is Theme {
  return typeof value === 'string' && themes.includes(value as Theme);
}

export function useTheme(specifiedTheme: String | null): ThemeStateType {
  const [theme, setTheme] = useState<Theme | null>(() => {
    if (specifiedTheme && isTheme(specifiedTheme)) {
      return specifiedTheme;
    }

    return null;
  });

  const persistTheme = useFetcher();

  const mountRun = useRef(false);
  useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!theme) {
      return;
    }

    persistTheme.submit({ theme }, { action: 'prefs/theme', method: 'post' });
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersDarkMQ);
    const handleChange = () => {
      setTheme(mediaQuery.matches ? Theme.DARK : Theme.LIGHT);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return [theme, setTheme];
}
