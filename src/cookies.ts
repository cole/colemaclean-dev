export const buildCookie = (name: string, value: string): string => {
  return `${name}=${value};samesite=strict; max-age=1536000; secure`;
};
