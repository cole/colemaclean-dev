import type { AstroAdapter } from 'astro';
import { parseCookies } from './cookies';

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

const themes: Array<Theme> = Object.values(Theme);

export function isTheme(value: unknown): value is Theme {
  return typeof value === "string" && themes.includes(value as Theme);
}

export function getCookieTheme(request: Request): Theme | null {
    const cookies = parseCookies(
        request.headers.get('cookie') ?? ''
    );
    return isTheme(cookies.theme) ? cookies.theme : null;
}