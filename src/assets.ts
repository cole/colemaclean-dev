import {
  getAssetFromKV,
  mapRequestToAsset,
  Options,
} from '@cloudflare/kv-asset-handler';

declare const ENVIRONMENT: string;
/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response instead of
 *    the default 404.html page.
 */
const DEBUG = ENVIRONMENT === 'development';

export async function serveAsset(
  event: FetchEvent,
  mapRequestToAsset: (req: Request) => Request,
): Promise<Response> {
  const options: Partial<Options> = {
    mapRequestToAsset,
  };

  if (DEBUG) {
    // disable caching
    options.cacheControl = {
      bypassCache: true,
    };
  }

  try {
    const page = await getAssetFromKV(event, options);
    const response = new Response(page.body, page);

    // Content type and caching headers are set already
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('Referrer-Policy', 'unsafe-url');
    response.headers.set('Feature-Policy', 'none');

    return response;
  } catch (e) {
    // if an error is thrown try to serve the asset at 404.html
    if (!DEBUG) {
      const notFoundResponse = await getAssetFromKV(event, {
        mapRequestToAsset: (req) =>
          new Request(`${new URL(req.url).origin}/404.html`, req),
      });

      return new Response(notFoundResponse.body, {
        ...notFoundResponse,
        status: 404,
      });
    }

    return new Response(e.message || e.toString(), { status: 500 });
  }
}
