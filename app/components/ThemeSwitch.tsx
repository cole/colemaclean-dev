import { ThemeContext, themes } from '~/themes';
import lightBulbEmoji from '~/emoji/light_bulb.svg';

export default function ThemeSwitch() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        const isDarkTheme = theme === themes.dark;

        return (
          <div className="toggle-button">
            <label id="theme-switch-label" htmlFor="theme-switch">
              {isDarkTheme ? 'light mode' : 'dark mode'}
            </label>
            <button
              id="theme-switch"
              role="switch"
              tabIndex={0}
              aria-checked={isDarkTheme}
              onClick={toggleTheme}
              onKeyPress={toggleTheme}
            >
              <img className="emoji" src={lightBulbEmoji} alt=":light_bulb:" />
            </button>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
