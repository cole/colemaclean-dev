import { renderTemplate } from './render';
import indexTemplate from './templates/index.njk';

export function getHome(request: Request): Promise<Response> {
  const context = {
    currentTime: new Date().toISOString(),
  };
  const headers = {
    Link:
      '</js/main.js>; rel=preload; as=script, </css/style.css>; rel=preload; as=style',
  };

  return renderTemplate(indexTemplate, request, context, 200, headers);
}
