import Toucan from 'toucan-js';

import { renderTemplate } from './render';
import indexTemplate from './templates/index.njk';

export function getHome(request: Request, sentry: Toucan): Promise<Response> {
  const context = {
    currentTime: new Date().toISOString(),
  };
  const headers = {
    Link:
      '</js/main.js>; rel=preload; as=script, </css/style.css>; rel=preload; as=style',
  };

  try {
    return renderTemplate(indexTemplate, request, context, 200, headers);
  } catch (exc) {
    sentry.captureException(exc);
    throw exc;
  }
}
