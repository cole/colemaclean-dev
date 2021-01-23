import { getAssetFromKV, Options } from '@cloudflare/kv-asset-handler';

declare const ENVIRONMENT: string;
// The DEBUG flag will skip caching on the edge
const DEBUG = ENVIRONMENT === 'development';

function mapRequestToAssetNotFound(req: Request): Request {
  const requestUrl = new URL(req.url);
  const notFoundUrl = `${requestUrl.origin}/404.html`;
  return new Request(notFoundUrl, req);
}

async function notFoundHandler(event: FetchEvent): Promise<Response> {
  const notFoundPage = await getAssetFromKV(event, {
    mapRequestToAsset: mapRequestToAssetNotFound,
  });

  return new Response(notFoundPage.body, {
    ...notFoundPage,
    status: 404,
  });
}

function defaultNotFoundResponse(request: Request, assetErr: Error): Response {
  const requestUrl = new URL(request.url);
  const body = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Not Found</title>
  </head>

  <body>
    <h1>Not Found</h1>
    <p>Nothing found at: ${requestUrl.pathname}</p>
    <p>Error details: ${assetErr.message || assetErr.toString()}</p>
  </body>
</html>`;

  const response = new Response(body, { status: 404 });
  response.headers.set('Content-Type', 'text/html');

  return response;
}

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
      const notFoundResponse = await notFoundHandler(event);
      return notFoundResponse;
    } catch (notFoundErr) {
      return defaultNotFoundResponse(event.request, assetErr);
    }
  }
}
