import { responseWithErrorFallback } from './error';
import { getAsset } from './asset';
import { getHome } from './home';

const handleRequest = (event: FetchEvent) => {
  const url = new URL(event.request.url);

  let response;

  if (url.pathname === '/' || url.pathname === '/index.html') {
    response = getHome(event.request);
  } else {
    response = getAsset(event, (req) => req);
  }

  event.respondWith(responseWithErrorFallback(event.request, response));
};

addEventListener('fetch', handleRequest);
