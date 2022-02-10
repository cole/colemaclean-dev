import { createCookie } from 'remix';

export const themeCookie = createCookie('theme', {
  maxAge: 31536000, // one year
  sameSite: 'strict',
  secure: true,
  httpOnly: false,
});
