import { Form } from 'remix';
import { ThemeContext, THEMES } from '~/themes';
import lightBulbEmoji from '~/emoji/light_bulb.svg';

export default function ThemeSwitch() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const currentTheme = theme ?? THEMES.light;
        const otherThemeName =
          currentTheme.name === THEMES.dark.name ? 'light' : 'dark';
        const otherTheme = THEMES[otherThemeName];

        return (
          <Form method="post" action="/prefs/theme" className="toggle-button">
            <input type="hidden" name="theme" value={otherThemeName} />
            <button
              id="theme-switch"
              type="submit"
              tabIndex={0}
              title={otherTheme ? otherTheme.switchLabel : ''}
            >
              <img className="emoji" src={lightBulbEmoji} alt=":light_bulb:" />
            </button>
          </Form>
        );
      }}
    </ThemeContext.Consumer>
  );
}
