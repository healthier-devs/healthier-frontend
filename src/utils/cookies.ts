import { Cookies } from "react-cookie";
import { DEVELOPMENT_SET_COOKIE_OPTIONS, DEPLOYMENT_SET_COOKIE_OPTIONS, ACCESS_TOKEN_AGE, REFRESH_TOKEN_AGE } from "src/data/account";
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

export const saveToken = ({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }) => {
  setCookie("accessToken", accessToken, {
    ...DEVELOPMENT_SET_COOKIE_OPTIONS,
    maxAge: ACCESS_TOKEN_AGE,
  });
  setCookie("refreshToken", refreshToken, {
    ...DEVELOPMENT_SET_COOKIE_OPTIONS,
    maxAge: REFRESH_TOKEN_AGE,
  });
};
