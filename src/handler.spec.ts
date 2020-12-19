import { handleRequest } from '../src/handler';

describe('handler returns response with request method', () => {
  const methods = [
    'GET',
    'HEAD',
    'POST',
    'PUT',
    'DELETE',
    'CONNECT',
    'OPTIONS',
    'TRACE',
    'PATCH',
  ];
  methods.forEach((method) => {
    test(method, async () => {
      const result = await handleRequest(new Request('/', { method }));
      const text = await result.text();
      expect(text).toContain(method);
    });
  });
});
