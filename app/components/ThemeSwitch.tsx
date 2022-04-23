import { Form, useTransition } from 'remix';
import { ThemeContext, THEMES } from '~/themes';
import { LightBulb } from '~/components/emoji';

export default function ThemeSwitch() {
  const transition = useTransition();

  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const currentTheme = theme ?? THEMES.light;
        const otherThemeName =
          currentTheme.name === THEMES.dark.name ? 'light' : 'dark';
        const otherTheme = THEMES[otherThemeName];

        return (
          <Form
            method="post"
            action="/prefs/theme"
            replace
            className="toggle-button"
          >
            <input type="hidden" name="theme" value={otherThemeName} />
            <button
              id="theme-switch"
              type="submit"
              disabled={transition.state !== 'idle'}
              title={otherTheme ? otherTheme.switchLabel : ''}
            >
              <LightBulb className="emoji" />
            </button>
          </Form>
        );
      }}
    </ThemeContext.Consumer>
  );
}
