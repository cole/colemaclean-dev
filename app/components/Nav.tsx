import { NavLink } from '@remix-run/react';
import ThemeSwitch from '~/components/ThemeSwitch';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink title="root" to="/" end prefetch="intent">
            /
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" prefetch="intent">
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" prefetch="intent">
            contact
          </NavLink>
        </li>
        <li id="toggles">
          <ThemeSwitch />
        </li>
      </ul>
    </nav>
  );
}
