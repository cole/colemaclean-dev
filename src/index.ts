import Toucan from 'toucan-js';

import { responseWithErrorFallback } from './error';
import { getAsset } from './asset';
import { getHome } from './home';

declare const ENVIRONMENT: string;
declare const SENTRY_DSN: string;

const handleRequest = (event: FetchEvent) => {
  const sentry = new Toucan({
    dsn: SENTRY_DSN,
    event,
    allowedHeaders: ['user-agent'],
    environment: ENVIRONMENT,
  });

  const url = new URL(event.request.url);

  let response;

  if (url.pathname === '/' || url.pathname === '/index.html') {
    response = getHome(event.request, sentry);
  } else {
    response = getAsset(event, (req) => req, sentry);
  }

  event.respondWith(responseWithErrorFallback(event.request, response));
};

addEventListener('fetch', handleRequest);
