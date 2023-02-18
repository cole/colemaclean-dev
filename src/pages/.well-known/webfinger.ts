import type { APIRoute } from 'astro';

const hachydermAccount = {
  subject: 'acct:cole@hachyderm.io',
  aliases: ['https://hachyderm.io/@cole', 'https://hachyderm.io/users/cole'],
  links: [
    {
      rel: 'http://webfinger.net/rel/profile-page',
      type: 'text/html',
      href: 'https://hachyderm.io/@cole',
    },
    {
      rel: 'self',
      type: 'application/activity+json',
      href: 'https://hachyderm.io/users/cole',
    },
    {
      rel: 'http://ostatus.org/schema/1.0/subscribe',
      template: 'https://hachyderm.io/authorize_interaction?uri={uri}',
    },
  ],
};

export const get: APIRoute = ({ request }) => {
  const url = new URL(request.url);
  if (url.searchParams.get('resource') !== 'acct:cole@colemaclean.dev') {
    return new Response(null, { status: 404 });
  }

  return new Response(JSON.stringify(hachydermAccount), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
