import { renderTemplate } from './render';
import indexTemplate from './templates/index.njk';

export function getHome(): Promise<Response> {
  const context = {
    currentTime: new Date().toISOString(),
  };
  const headers = {
    Link:
      '</js/main.js>; rel=preload; as=script, </css/style.css>; rel=preload; as=style',
  };

  return renderTemplate(indexTemplate, context, 200, headers);
}
