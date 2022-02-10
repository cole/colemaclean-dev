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
import { ThemeContext, useTheme } from '~/themes';
import stylesUrl from '~/styles/main.css';
import crtBlueScreenEmoji from '~/emoji/crt_blue_screen.svg';

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
  return { savedTheme: cookie.theme || null };
};

export default function App() {
  const { savedTheme } = useLoaderData();
  const [theme, setTheme] = useTheme(savedTheme);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <ThemeContext.Provider value={{ theme, setTheme }}>
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
            <img
              className="emoji"
              src={crtBlueScreenEmoji}
              alt=":crt_blue_screen:"
            />
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
