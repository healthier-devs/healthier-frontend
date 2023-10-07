import axios from "axios";
import { AxiosError } from "axios";
import { setCookie, getCookie } from "src/utils/cookies";
import type { AxiosResponse, AxiosRequestConfig } from "axios";

const responseBody = (response: AxiosResponse | AxiosError) => {
  if (response instanceof AxiosError) {
    return Promise.reject(response);
  }

  return response.data;
};

export const createUnauthorizedFetcher = (path: string) => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}${path}`,
    timeout: 1500,
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
    timeout: 1500,
  });

  instance.interceptors.request.use(
    function (config: AxiosRequestConfig) {
      const accessToken = localStorage.getItem("accessToken") ?? "";

      //const accessToken = "123";

      (config.headers ?? {}).Authorization = "Bearer " + accessToken;

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

      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = getCookie("refreshToken");

      if (!res || res.status !== 401 || !accessToken || !refreshToken) {
        return Promise.reject(_err);
      }

      try {
        const reissueResponse = await axios.post(`${process.env.REACT_APP_SERVER_URL}/reissue`, {
          accessToken,
          refreshToken,
        });

        localStorage.setItem("accessToken", reissueResponse.data.accessToken);
        setCookie("refreshToken", reissueResponse.data.refreshToken, {
          domain: "localhost",
          path: "/",
          secure: false, // TODO: 배포 시에는 HTTPS 설정을 위해 true로 변경
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
    patch: <T>(url: string, body: T) => instance.patch<T>(url, body).then(responseBody),
  };
};
