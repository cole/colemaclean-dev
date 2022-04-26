import { themeCookie } from '~/cookies';
import { action } from '~/routes/prefs/theme';

describe('theme action', () => {
  test.each(['light', 'dark'])(
    'submitting the form sets cookie [%s]',
    async (theme) => {
      const formData = new FormData();
      formData.set('theme', theme);

      const request = new Request('http://localhost', {
        method: 'POST',
        body: formData,
      });

      const response = await action({
        request,
        context: {},
        params: {},
      });

      const header = response.headers.get('Set-Cookie');
      expect(header).toBeTruthy();
      expect(header).toEqual(await themeCookie.serialize({ theme }));
      expect(await response.json()).toContain({ success: true });
    },
  );

  test('submitting an empty post errors', async () => {
    const formData = new FormData();

    const request = new Request('http://localhost', {
      method: 'POST',
      body: formData,
    });

    const response = await action({
      request,
      context: {},
      params: {},
    });

    expect(response.status).toEqual(400);
    expect(await response.json()).toContain({ success: false });
  });
});
