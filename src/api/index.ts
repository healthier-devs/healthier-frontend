import axios from "axios";
import { AxiosError } from "axios";
import { DEVELOPMENT_SET_COOKIE_OPTIONS, DEPLOYMENT_SET_COOKIE_OPTIONS, ACCESS_TOKEN_AGE, REFRESH_TOKEN_AGE } from "src/data/account";
import { setCookie, getCookie } from "src/utils/cookies";
import type { AxiosResponse, AxiosRequestConfig } from "axios";

const FETCHER_TIME_OUT = 7500;

export const responseBody = (response: AxiosResponse) => {
  if (response instanceof AxiosError) {
    return Promise.reject(response);
  }

  return response.data;
};

export const createUnauthorizedFetcher = (path: string) => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}${path}`,
    timeout: FETCHER_TIME_OUT,
  });

  return {
    get: <T>(url: string, params?: object) => instance.get<T>(url, { params }).then(responseBody),
    post: <T>(url: string, body?: T) => instance.post<T>(url, body).then(responseBody),
    delete: <T>(url: string, body?: { data: T }) => instance.delete<T>(url, body).then(responseBody),
    patch: <T>(url: string, body: T) => instance.patch<T>(url, body).then(responseBody),
  };
};

export const createFetcher = (path: string) => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}${path}`,
    timeout: FETCHER_TIME_OUT,
  });

  instance.interceptors.request.use(
    function (config: AxiosRequestConfig) {
      const accessToken = getCookie("accessToken");

      if (accessToken) {
        (config.headers ?? {}).Authorization = "Bearer " + accessToken;
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (res) {
      return res;
    },
    async function (err: AxiosError | Error) {
      const _err = err as unknown as AxiosError;
      const { response: res } = _err;

      const accessToken = getCookie("accessToken");
      const refreshToken = getCookie("refreshToken");

      if (!res || res.status !== 401 || !accessToken || !refreshToken) {
        return Promise.reject(_err);
      }
      try {
        const reissueResponse = await axios.post(`${process.env.REACT_APP_SERVER_URL}/reissue`, {
          accessToken,
          refreshToken,
        });

        setCookie("accessToken", reissueResponse.data.accessToken, {
          ...DEVELOPMENT_SET_COOKIE_OPTIONS,
          maxAge: ACCESS_TOKEN_AGE,
        });
        setCookie("refreshToken", reissueResponse.data.refreshToken, {
          ...DEVELOPMENT_SET_COOKIE_OPTIONS,
          maxAge: REFRESH_TOKEN_AGE,
        });

        return instance.request(_err.config);
      } catch (reissueErr) {
        return Promise.reject(reissueErr);
      }
    }
  );

  return {
    get: <T>(url: string, params?: object) => instance.get<T>(url, { params }).then(responseBody),
    post: <T>(url: string, body?: T, header?: object) =>
      instance
        .post<T>(url, body, header)
        .then(responseBody)
        .catch((err) => {
          return Promise.reject(err);
        }),
    delete: <T>(url: string, body?: { data: T }) => instance.delete<T>(url, body).then(responseBody),
    patch: <T>(url: string, body?: T) => instance.patch<T>(url, body).then(responseBody),
    put: <T>(url: string, body?: T) => instance.put<T>(url, body).then(responseBody),
  };
};
