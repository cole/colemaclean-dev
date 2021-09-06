import Toucan from 'toucan-js';

import { renderTemplate } from './render';
import indexTemplate from './templates/index.njk';

export function getHome(request: Request, sentry: Toucan): Promise<Response> {
  const context = {
    currentTime: new Date().toISOString(),
    asn: request.cf.asn,
    colo: request.cf.colo,
    country: request.cf.country,
    city: request.cf.city,
    continent: request.cf.continent,
    latitude: request.cf.latitude,
    longitude: request.cf.longitude,
    postalCode: request.cf.postalCode,
    metroCode: request.cf.metroCode,
    region: request.cf.region,
    regionCode: request.cf.regionCode,
    timezone: request.cf.timezone,
  };
  const headers = {
    Link: '</js/main.js>; rel=preload; as=script',
  };

  try {
    return renderTemplate(indexTemplate, request, context, 200, headers);
  } catch (exc) {
    sentry.captureException(exc);
    throw exc;
  }
}
