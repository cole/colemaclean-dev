import { renderToReadableStream } from 'react-dom/server';
import { RemixServer } from 'remix';
import type { EntryContext } from 'remix';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const controller = new AbortController();
  let didError = false;

  try {
    const stream = await renderToReadableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        signal: controller.signal,
        onError(error) {
          didError = true;
          console.error(error);
        },
      },
    );

    responseHeaders.set('Content-Type', 'text/html');

    return new Response(stream, {
      status: didError ? 500 : responseStatusCode,
      headers: responseHeaders,
    });
  } catch (error) {
    return new Response(
      `<!doctype html><html><body><p>${error.toString()}</p></body></html>`,
      {
        status: 500,
        headers: { 'Content-Type': 'text/html' },
      },
    );
  }
}
