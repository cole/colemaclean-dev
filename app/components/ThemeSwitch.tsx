import { useEffect, useState } from 'react';
import { Theme, ThemeContext, getPreferredTheme } from '~/themes';
import { LightBulb } from '~/components/emoji';

export default function ThemeSwitch() {
  // Use state for preferred theme to force an update after the
  // effect fires
  const [preferredTheme, setPreferredTheme] = useState<Theme | null>(null);
  useEffect(() => {
    setPreferredTheme(getPreferredTheme());
  }, []);

  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
        const currentTheme = theme ?? preferredTheme ?? Theme.LIGHT;
        const otherTheme =
          currentTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        const toggleTheme = () => {
          setTheme(otherTheme);
        };

        return (
          <div className="toggle-button">
            <button
              id="theme-switch"
              title={`${otherTheme} mode`}
              onClick={toggleTheme}
            >
              <LightBulb className="emoji" />
            </button>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
