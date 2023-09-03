import axios, { AxiosResponse } from "axios";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  timeout: 1500,
});

const responseBody = (response: AxiosResponse) => response.data;

export const fetcher = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
  delete: <T>(url: string, body: { data: T }) => instance.delete<T>(url, body).then(responseBody),
  patch: <T>(url: string, body: T) => instance.patch<T>(url, body).then(responseBody),
};
