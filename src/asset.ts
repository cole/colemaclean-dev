import { getAssetFromKV, Options } from '@cloudflare/kv-asset-handler';

import { DEFAULT_HEADERS } from './http';
import { NotFoundError } from './error';

declare const ENVIRONMENT: string;
// The DEBUG flag will skip caching on the edge
const DEBUG = ENVIRONMENT === 'development';

export async function getAsset(
  event: FetchEvent,
  cache = true,
): Promise<Response> {
  const options: Partial<Options> = {
    mapRequestToAsset: (req: Request) => req,
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
    throw new NotFoundError(assetExc.toString());
  }

  return response;
}
