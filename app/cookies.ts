import { createCookie } from 'remix';

export const themeCookie = createCookie('theme', {
  maxAge: 31536000, // one year
});
