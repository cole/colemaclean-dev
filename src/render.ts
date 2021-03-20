import { DEFAULT_HEADERS } from './http';

interface TemplateFunction {
  (params: Record<string, unknown>): Promise<string>;
}

export async function renderTemplate(
  template: TemplateFunction,
  context: Record<string, unknown>,
  statusCode = 200,
  headers: Record<string, string> = {},
): Promise<Response> {
  const { readable, writable } = new TransformStream();
  const encoder = new TextEncoder();

  template(context).then((rendered) => {
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
