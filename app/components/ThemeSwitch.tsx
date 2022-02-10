import { useEffect, useState } from 'react';
import { ThemeContext, themes } from '~/themes';
import type { Theme } from '~/themes';
import lightBulbEmoji from '~/emoji/light_bulb.svg';

export default function ThemeSwitch() {
  const [preferredDefaultTheme, setPreferredDefaultTheme] =
    useState<Theme | null>(null);

  useEffect(() => {
    const darkMediaQuery = window.matchMedia(themes.dark.mediaQuery);
    const updatePreferredDefaultTheme = (
      event: MediaQueryList | MediaQueryListEvent,
    ) => {
      setPreferredDefaultTheme(event.matches ? themes.dark : themes.light);
    };
    updatePreferredDefaultTheme(darkMediaQuery);
    darkMediaQuery.addEventListener('change', updatePreferredDefaultTheme);
  });

  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
        const currentTheme = theme ?? preferredDefaultTheme ?? themes.light;
        const otherThemeName =
          currentTheme.name === themes.dark.name ? 'light' : 'dark';
        const otherTheme = themes[otherThemeName];

        const switchTheme = async () => {
          setTheme(otherThemeName);
        };

        return (
          <div className="toggle-button">
            <button
              id="theme-switch"
              role="switch"
              tabIndex={0}
              onClick={switchTheme}
              onKeyPress={switchTheme}
              title={otherTheme ? otherTheme.switchLabel : ''}
            >
              <img className="emoji" src={lightBulbEmoji} alt=":light_bulb:" />
            </button>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
