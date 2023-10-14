import { Cookies } from "react-cookie";
import type { CookieSetOptions } from "universal-cookie";

const cookies = new Cookies();

export const setCookie = (name: string, value: string, options?: CookieSetOptions) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name);
};
