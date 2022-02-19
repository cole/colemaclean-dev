import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from 'remix';
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  ErrorBoundaryComponent,
} from 'remix';

import { themeCookie } from '~/cookies';
import { THEMES, ThemeContext, useDefaultTheme } from '~/themes';
import stylesUrl from '~/styles/main.css';
import { CrtBlueScreen } from '~/components/emoji';

export const meta: MetaFunction = () => {
  return { title: 'Cole Maclean' };
};
export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: '/favicon.svg',
    },
    {
      rel: 'canonical',
      href: 'https://colemaclean.dev/',
    },
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
    {
      rel: 'preload',
      href: '/fonts/azuro-regular.woff2',
      as: 'font',
      type: 'font/woff2',
    },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await themeCookie.parse(cookieHeader)) || {};
  const theme = cookie.theme || null;
  return { theme };
};

export default function App() {
  const data = useLoaderData();
  const defaultTheme = useDefaultTheme();
  const savedTheme: 'light' | 'dark' | null = data.theme;
  const theme = savedTheme ? THEMES[savedTheme] : defaultTheme;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <ThemeContext.Provider value={{ theme }}>
        <body className={theme ? theme.className : ''}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </body>
      </ThemeContext.Provider>
    </html>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <header id="main-header">
          <h1>
            <CrtBlueScreen className="emoji" title="BSOD" aria-role="image" />
            Server Error
          </h1>
        </header>
        <main id="main-content">
          <p>Whoops.</p>
        </main>
        <Scripts />
      </body>
    </html>
  );
};

export function CatchBoundary() {
  const caught = useCatch();
  console.error(caught);
  return (
    <html>
      <head>
        <title>404</title>
        <Meta />
        <Links />
      </head>
      <body>
        <header id="main-header">
          <h1>Page Not Found</h1>
        </header>
        <main id="main-content">
          <p>Ooops! That link is broken.</p>
        </main>
        <Scripts />
      </body>
    </html>
  );
}
