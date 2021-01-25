import { getAsset } from './asset';

class CurrentTimeHandler implements ElementHandlerOptionals {
  element(element: Element) {
    const date = new Date();
    element.setInnerContent(date.toLocaleTimeString());
  }
}

export async function fetchAndStreamPage(event: FetchEvent): Promise<Response> {
  const index = await getAsset(
    event,
    (req) => new Request(`${new URL(req.url).origin}/index.html`, req),
    false,
  );

  if (index === null || index.body === null) {
    throw new Error('Failed to load index.');
  }

  const { readable, writable } = new TransformStream();
  index.body.pipeTo(writable);

  const response = new Response(readable, index);
  // Content type header is set already
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'unsafe-url');
  response.headers.set('Feature-Policy', 'none');

  const rewriter = new HTMLRewriter();
  rewriter.on('span#current-time', new CurrentTimeHandler());

  return rewriter.transform(response);
}
