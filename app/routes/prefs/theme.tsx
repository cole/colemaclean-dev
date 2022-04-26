import type { ActionFunction } from 'remix';
import { json } from 'remix';

import { isTheme } from '~/themes';
import { themeCookie } from '~/cookies';

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const theme = form.get('theme');
  if (!(theme && isTheme(theme))) {
    return json(
      {
        success: false,
        message: `theme value of ${theme} is not a valid theme`,
      },
      { status: 400 },
    );
  }

  const cookie = await themeCookie.serialize({ theme });
  return json(
    {
      success: true,
    },
    {
      headers: {
        'Set-Cookie': cookie,
      },
    },
  );
};
