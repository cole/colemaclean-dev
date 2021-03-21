export const DEFAULT_HEADERS = new Map([
  ['X-XSS-Protection', '1; mode=block'],
  ['X-Content-Type-Options', 'nosniff'],
  ['X-Frame-Options', 'DENY'],
  ['Referrer-Policy', 'unsafe-url'],
  ['Feature-Policy', 'none'],
]);

export function getCookie(request: Request, name: string): string {
  let result = '';
  const cookieString = request.headers.get('Cookie');
  if (cookieString) {
    const cookies = cookieString.split(';');
    cookies.forEach((cookie) => {
      const cookiePair = cookie.split('=', 2);
      const cookieName = cookiePair[0].trim();
      if (cookieName === name) {
        const cookieVal = cookiePair[1];
        result = cookieVal;
      }
    });
  }

  return result;
}
