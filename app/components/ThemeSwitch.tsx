import { useEffect } from 'react';
import { ThemeContext, themes } from '~/themes';
import type { Theme } from '~/themes';
import lightBulbEmoji from '~/emoji/light_bulb.svg';

export default function ThemeSwitch() {
  let defaultTheme: Theme;
  let otherTheme: Theme;

  useEffect(() => {
    const mediaPrefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    defaultTheme = mediaPrefersDarkMode ? themes.dark : themes.light;
    otherTheme = mediaPrefersDarkMode ? themes.light : themes.dark;
  });

  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
        const isChecked = theme === otherTheme;
        const switchTheme = () => {
          const newTheme = theme !== otherTheme ? otherTheme : defaultTheme;
          setTheme(newTheme);
        };

        return (
          <div className="toggle-button">
            <button
              id="theme-switch"
              role="switch"
              tabIndex={0}
              aria-checked={isChecked}
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
