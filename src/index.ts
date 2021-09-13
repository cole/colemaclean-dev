import Toucan from 'toucan-js';
import { Router } from 'itty-router';

import {
  fallbackErrorResponse,
  errorResponse,
  notFoundResponse,
  NotFoundError,
} from './error';
import { getAsset } from './asset';
import { getHome } from './home';

declare const ENVIRONMENT: string;
declare const SENTRY_DSN: string;

const router = Router();

router.get('/', getHome);
router.get('/index.html', getHome);

// Get asset will throw NotFound, resulting in 404
router.get('*', (_req: Request, event: FetchEvent) => getAsset(event));

addEventListener('fetch', (event: FetchEvent) => {
  const sentry = new Toucan({
    dsn: SENTRY_DSN,
    event,
    allowedHeaders: ['user-agent'],
    environment: ENVIRONMENT,
  });

  const errorHandler = (error: Error) => {
    if (error instanceof NotFoundError) {
      sentry.setTag('status_code', '404');
      sentry.captureException(error);
      try {
        return notFoundResponse(event.request);
      } catch (notFoundHandlerExc: unknown) {
        sentry.captureException(notFoundHandlerExc);
        return fallbackErrorResponse(404, 'Not Found', notFoundHandlerExc);
      }
    } else {
      sentry.setTag('status_code', '500');
      sentry.captureException(error);
      try {
        return errorResponse(event.request, error);
      } catch (errorHandlerExc: unknown) {
        sentry.captureException(errorHandlerExc);
        return fallbackErrorResponse(500, 'Server Error', errorHandlerExc);
      }
    }
  };

  event.respondWith(router.handle(event.request, event).catch(errorHandler));
});
