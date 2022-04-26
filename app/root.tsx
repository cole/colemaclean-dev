import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  ErrorBoundaryComponent,
} from 'remix';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from 'remix';

import { themeCookie } from '~/cookies';
import type { Theme } from '~/themes';
import { ThemeContext, useTheme } from '~/themes';
import stylesUrl from '~/styles/main.css';
import Nav from '~/components/Nav';
import { CrtBlueScreen, CrtPrompt } from '~/components/emoji';

export type LoaderData = {
  theme: Theme | null;
};

export const meta: MetaFunction = () => {
  return {
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
    title: 'Cole Maclean',
  };
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
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      href: '/fonts/azuro-bold.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
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
  const data = useLoaderData<LoaderData>();
  const [theme, setTheme] = useTheme(data.theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>
        <body className={theme ? `${theme}-theme` : ''}>
          <div id="cover">
            <Nav />
            <Outlet />
          </div>
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </body>
      </html>
    </ThemeContext.Provider>
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
        <div id="cover">
          <h1>
            <CrtBlueScreen className="emoji" title="BSOD" />
            Server Error
          </h1>
          <p>Whoops.</p>
          <p>
            <Link to="/">Home</Link>
          </p>
        </div>
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
        <div id="cover">
          <h1>
            <CrtPrompt className="emoji" />
            Not Found
          </h1>
          <p>Ooops! That link is broken.</p>
          <p>
            <Link to="/">Home</Link>
          </p>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
