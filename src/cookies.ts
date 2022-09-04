type cookies = {
  [key: string]: string;
};

export const parseCookies = (rawCookies: string) => {
  return rawCookies
    .split(";")
    .map((cookie) => cookie.split("="))
    .filter((cookie) => cookie[0] && cookie[1])
    .reduce((parsedCookies: cookies, cookie) => {
      const [name, value] = cookie;
      parsedCookies[decodeURIComponent(name.trim())] = decodeURIComponent(
        value.trim()
      );
      return parsedCookies;
    }, {});
};

export const buildCookie = (name: string, value: string): string => {
  return `${name}=${value};samesite=strict; max-age=1536000; secure`;
};
