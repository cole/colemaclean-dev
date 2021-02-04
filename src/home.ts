import { serveSinglePageApp } from '@cloudflare/kv-asset-handler';
import { getAsset } from './asset';

type StyleMapping = {
  [path: string]: string;
};

class InlineStyleReplacer implements ElementHandlerOptionals {
  styles: StyleMapping;

  constructor(styles: StyleMapping) {
    this.styles = styles;
  }

  element(element: Element) {
    const path = element.getAttribute('href');
    if (!path) {
      return;
    }

    const styleData = this.styles[path];
    if (styleData) {
      element.replace(`<style>\n${styleData}\n</style>`, { html: true });
    }
  }
}

class CurrentTimeHandler implements ElementHandlerOptionals {
  element(element: Element) {
    const date = new Date();
    element.setInnerContent(date.toLocaleTimeString());
  }
}

export async function fetchAndStreamPage(event: FetchEvent): Promise<Response> {
  const indexPromise = getAsset(event, serveSinglePageApp, false);
  const stylePromise = getAsset(
    event,
    (req) => new Request(`${new URL(req.url).origin}/css/style.css`, req),
    true,
  );
  const index = await indexPromise;

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
  response.headers.set('Link', '</js/main.js>; rel=preload; as=script');

  const styleResponse = await stylePromise;
  const styleData = await styleResponse.text();

  const rewriter = new HTMLRewriter();
  rewriter.on(
    'link[rel=stylesheet]',
    new InlineStyleReplacer({ '/css/style.css': styleData }),
  );
  rewriter.on('span#current-time', new CurrentTimeHandler());

  return rewriter.transform(response);
}
