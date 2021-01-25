export default function errorResponse(
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
