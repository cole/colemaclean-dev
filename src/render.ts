import { DEFAULT_HEADERS, getCookie } from './http';
import stylesheet from '../assets/css/style.css';

interface TemplateFunction {
  (params: Record<string, unknown>): Promise<string>;
}

function getRequestContext(request: Request): Record<string, string> {
  const theme = getCookie(request, 'theme');
  return {
    theme,
    stylesheet,
  };
}

export async function renderTemplate(
  template: TemplateFunction,
  request: Request,
  context: Record<string, unknown>,
  statusCode = 200,
  headers: Record<string, string> = {},
): Promise<Response> {
  const { readable, writable } = new TransformStream();
  const encoder = new TextEncoder();

  template({ ...getRequestContext(request), ...context }).then((rendered) => {
    const writer = writable.getWriter();
    writer.write(encoder.encode(rendered));
    writer.close();
  });

  const response = new Response(readable, {
    status: statusCode,
    headers: {
      'Content-Type': 'text/html',
      ...Object.fromEntries(DEFAULT_HEADERS.entries()),
      ...headers,
    },
  });

  return response;
}
