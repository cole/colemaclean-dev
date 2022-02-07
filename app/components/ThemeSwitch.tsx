import { useEffect } from 'react';
import { themeCookie } from '~/cookies';
import { ThemeContext, themes } from '~/themes';
import type { Theme } from '~/themes';
import lightBulbEmoji from '~/emoji/light_bulb.svg';

export default function ThemeSwitch() {
  let preferredDefaultTheme: Theme;

  useEffect(() => {
    if (window.matchMedia(themes.dark.mediaQuery).matches) {
      preferredDefaultTheme = themes.dark;
    }
  });

  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
        const currentTheme = theme ?? preferredDefaultTheme ?? themes.light;
        const otherTheme =
          currentTheme.name === themes.dark.name ? themes.light : themes.dark;

        const switchTheme = async () => {
          setTheme(otherTheme);
          const cookieData = await themeCookie.serialize({
            theme: otherTheme.name,
          });
          document.cookie = cookieData;
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
