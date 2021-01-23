const template = (request: Request): string => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Hello World</title>
      <link rel="stylesheet" href="/style.css">
    </head>
  
    <body>
      <p>request method: ${request.method}</p>
    </body>
  </html>`;
};

export async function handleRequest(request: Request): Promise<Response> {
  const response = new Response(template(request));
  response.headers.set('Content-Type', 'text/html');

  return response;
}
