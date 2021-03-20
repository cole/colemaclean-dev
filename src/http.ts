export const DEFAULT_HEADERS = new Map([
  ['X-XSS-Protection', '1; mode=block'],
  ['X-Content-Type-Options', 'nosniff'],
  ['X-Frame-Options', 'DENY'],
  ['Referrer-Policy', 'unsafe-url'],
  ['Feature-Policy', 'none'],
]);
