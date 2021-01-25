import { getAssetFromKV, Options } from '@cloudflare/kv-asset-handler';
import errorResponse from './error';

declare const ENVIRONMENT: string;
// The DEBUG flag will skip caching on the edge
const DEBUG = ENVIRONMENT === 'development';

async function notFoundHandler(event: FetchEvent): Promise<Response> {
  const notFoundPage = await getAssetFromKV(event, {
    mapRequestToAsset: (req) =>
      new Request(`${new URL(req.url).origin}/404.html`, req),
  });

  return new Response(notFoundPage.body, {
    ...notFoundPage,
    status: 404,
  });
}

export async function getAsset(
  event: FetchEvent,
  mapRequestToAsset: (req: Request) => Request,
  cache = true,
): Promise<Response> {
  const options: Partial<Options> = {
    mapRequestToAsset,
  };

  if (DEBUG || !cache) {
    // disable caching
    options.cacheControl = {
      bypassCache: true,
    };
  }

  try {
    const asset = await getAssetFromKV(event, options);
    const response = new Response(asset.body, asset);

    // Content type and caching headers are set already
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('Referrer-Policy', 'unsafe-url');
    response.headers.set('Feature-Policy', 'none');

    return response;
  } catch (assetErr) {
    // if an error is thrown try to serve the asset at 404.html
    try {
      return notFoundHandler(event);
    } catch (notFoundErr) {
      return errorResponse(404, 'Not Found', assetErr);
    }
  }
}
