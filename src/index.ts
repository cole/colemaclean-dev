import { getAsset } from './asset';
import errorResponse from './error';
import { fetchAndStreamPage } from './home';

const assetRouter = function (req: Request): Request {
  // TODO: alias any asset paths as needed
  return req;
};

const handleRequest = (event: FetchEvent) => {
  try {
    const url = new URL(event.request.url);
    if (url.pathname === '/' || url.pathname === '/index.html') {
      event.respondWith(fetchAndStreamPage(event));
    } else {
      event.respondWith(getAsset(event, assetRouter));
    }
  } catch (exc) {
    const response = errorResponse(500, 'Server Error', exc);
    event.respondWith(response);
  }
};

addEventListener('fetch', handleRequest);
