import { handleRequest } from './home';

describe('handler returns response', () => {
  test('GET', async () => {
    const result = await handleRequest(new Request('/', { method: 'GET' }));
    const text = await result.text();
    expect(text).toContain('<body>');
  });
});
