import axios from "axios";
import { ILoginResponse } from "src/interfaces/account";
import { setCookie, getCookie } from "src/utils/cookies";
import type { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";

const responseBody = (response: AxiosResponse) => response.data;

export const createUnauthorizedFetcher = (path: string) => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}${path}`,
    timeout: 1500,
  });

  return {
    get: <T>(url: string, params?: object) => instance.get<T>(url, { params }).then(responseBody),
    post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
    delete: <T>(url: string, body?: { data: T }) => instance.delete<T>(url, body).then(responseBody),
    patch: <T>(url: string, body: T) => instance.patch<T>(url, body).then(responseBody),
  };
};

export const createFetcher = (path: string) => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}${path}`,
    timeout: 1500,
  });

  // instance.interceptors.request.use(
  //   function (config: AxiosRequestConfig) {
  //     const accessToken = localStorage.getItem("accessToken") ?? "";

  //     (config.headers ?? {}).Authorization = "Bearer " + accessToken;

  //     return config;
  //   },
  //   function (error) {
  //     return Promise.reject(error);
  //   }
  // );

  // instance.interceptors.response.use(
  //   function (res) {
  //     return res;
  //   },
  //   async function (err: AxiosError | Error) {
  //     const _err = err as unknown as AxiosError;
  //     const { response: res } = _err;

  //     const accessToken = localStorage.getItem("accessToken");
  //     const refreshToken = getCookie("refreshToken");

  //     if (!res || res.status !== 401 || !accessToken || !refreshToken) {
  //       return Promise.reject(err);
  //     }

  //     try {
  //       const reissued = await axios.post<ILoginResponse, ILoginResponse>(`${process.env.REACT_APP_SERVER_URL}/user/reissue`, {
  //         accessToken,
  //         refreshToken,
  //       });

  //       localStorage.setItem("accessToken", reissued.accessToken);
  //       setCookie("refreshToken", reissued.refreshToken);

  //       return;
  //     } catch (reissueErr) {
  //       //
  //     }

  //     return Promise.reject(err);
  //   }
  // );

  return {
    get: <T>(url: string, params?: object) => instance.get<T>(url, { params }).then(responseBody),
    post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
    delete: <T>(url: string, body?: { data: T }) => instance.delete<T>(url, body).then(responseBody),
    patch: <T>(url: string, body: T) => instance.patch<T>(url, body).then(responseBody),
  };
};
