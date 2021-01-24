import { serveAsset } from './assets';
import { handleRequest } from './home';

declare const ENVIRONMENT: string;

const assetRouter = function (req: Request): Request {
  const url = new URL(req.url);

  // TODO: lookup and replace as required
  return new Request(url.toString());
};

addEventListener('fetch', (event) => {
  try {
    const url = new URL(event.request.url);
    if (url.pathname === '/' || url.pathname === '/index.html') {
      event.respondWith(handleRequest(event.request));
    } else {
      event.respondWith(serveAsset(event, assetRouter));
    }
  } catch (exc) {
    if (ENVIRONMENT === 'development') {
      return event.respondWith(
        new Response(exc.message || exc.toString(), {
          status: 500,
        }),
      );
    }
    event.respondWith(new Response('Internal Error', { status: 500 }));
  }
});
