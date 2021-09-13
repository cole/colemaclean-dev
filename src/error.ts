import notFoundTemplate from './templates/404.njk';
import errorTemplate from './templates/500.njk';
import { renderTemplate } from './render';

export class NotFoundError extends Error {}

export function fallbackErrorResponse(
  statusCode: number,
  message: string,
  err: unknown,
): Response {
  let errorBody = 'Unknown error';
  if (err instanceof Error) {
    errorBody = err.message || err.toString();
  }
  const body = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>${message}</title>
    </head>
  
    <body>
      <h1>${message}</h1>
      <p>${errorBody}</p>
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

export function notFoundResponse(request: Request): Promise<Response> {
  return renderTemplate(notFoundTemplate, request, {}, 404, {});
}

export function errorResponse(
  request: Request,
  error: Error,
): Promise<Response> {
  return renderTemplate(
    errorTemplate,
    request,
    {
      error: error.message || error.toString(),
    },
    500,
    {},
  );
}
