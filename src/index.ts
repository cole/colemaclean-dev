import { getAsset } from './asset';
import errorResponse from './error';
import { getHome } from './home';

const handleRequest = (event: FetchEvent) => {
  try {
    const url = new URL(event.request.url);
    let response;
    if (url.pathname === '/' || url.pathname === '/index.html') {
      response = getHome();
    } else {
      response = getAsset(event, (req) => req);
    }
    if (response !== undefined) {
      event.respondWith(response);
    }
  } catch (exc) {
    const response = errorResponse(500, 'Server Error', exc);
    event.respondWith(response);
  }
};

addEventListener('fetch', handleRequest);
