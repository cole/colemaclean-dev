import { Theme, ThemeContext } from '~/themes';
import { LightBulb } from '~/components/emoji';

export default function ThemeSwitch() {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
        const currentTheme = theme ?? Theme.LIGHT;
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
