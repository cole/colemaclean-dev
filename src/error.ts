import notFoundTemplate from './templates/404.njk';
import errorTemplate from './templates/500.njk';
import { renderTemplate } from './render';

export async function responseWithErrorFallback(
  response: Promise<Response>,
): Promise<Response> {
  let renderedResponse;
  try {
    renderedResponse = await response;
  } catch (exc) {
    try {
      renderedResponse = await errorResponse(exc);
    } catch (handlerExc) {
      renderedResponse = fallbackErrorResponse(500, 'Server Error', handlerExc);
    }
  }

  return renderedResponse;
}

export function fallbackErrorResponse(
  statusCode: number,
  message: string,
  err: Error,
): Response {
  const body = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>${message}</title>
    </head>
  
    <body>
      <h1>${message}</h1>
      <p>${err.message || err.toString()}</p>
    </body>
  </html>`;

  const response = new Response(body, {
    status: statusCode,
    headers: {
      'Content-Type': 'text/html',
    },
  });

  return response;
}

export function notFoundResponse(): Promise<Response> {
  return responseWithErrorFallback(
    renderTemplate(notFoundTemplate, {}, 404, {}),
  );
}

export function errorResponse(error: Error): Promise<Response> {
  return responseWi;
  thErrorFallback(
    renderTemplate(
      errorTemplate,
      {
        error: error.message || error.toString(),
      },
      500,
      {},
    ),
  );
}
