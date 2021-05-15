import { getAssetFromKV, Options } from '@cloudflare/kv-asset-handler';
import Toucan from 'toucan-js';

import { DEFAULT_HEADERS } from './http';
import { notFoundResponse, fallbackErrorResponse } from './error';

declare const ENVIRONMENT: string;
// The DEBUG flag will skip caching on the edge
const DEBUG = ENVIRONMENT === 'development';

export async function getAsset(
  event: FetchEvent,
  mapRequestToAsset: (req: Request) => Request,
  sentry: Toucan,
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

  let response;

  try {
    const asset = await getAssetFromKV(event, options);
    response = new Response(asset.body, asset);

    // Content type and caching headers are set already
    for (const [key, value] of DEFAULT_HEADERS) {
      response.headers.set(key, value);
    }
  } catch (assetExc) {
    sentry.captureException(assetExc);
    try {
      response = await notFoundResponse(event.request);
    } catch (handlerExc) {
      sentry.captureException(handlerExc);
      response = fallbackErrorResponse(404, 'Not Found', handlerExc);
    }
  }

  return response;
}
