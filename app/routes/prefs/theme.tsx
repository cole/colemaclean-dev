import type { ActionFunction } from 'remix';
import { redirect } from 'remix';

import { themeCookie } from '~/cookies';

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const theme = form.get('theme');
  if (typeof theme !== 'string') {
    throw new Error('Missing theme in form request.');
  }

  const cookie = await themeCookie.serialize({ theme });
  return redirect('/', {
    headers: {
      'Set-Cookie': cookie,
    },
  });
};
