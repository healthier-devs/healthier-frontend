import axios, { AxiosResponse } from "axios";
import type { IStampBodyRequest } from "src/interfaces/challenges";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/stamp`,
  timeout: 1500,
});

const responseBody = (response: AxiosResponse) => response.data;

const fetcher = {
  get: <T>(url: string, params?: object) => instance.get<T>(url, { params }).then(responseBody),
  post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
  delete: <T>(url: string, body?: { data: T }) => instance.delete<T>(url, body).then(responseBody),
  patch: <T>(url: string, body: T) => instance.patch<T>(url, body).then(responseBody),
};

export const stampFetcher = {
  getStampChart(id: string) {
    return fetcher.get(`/${id}`);
  },
  deleteStampChart(id: string) {
    return fetcher.delete(`/${id}`);
  },
  reviveStampChart({ image, userId, challengeId, dayCount }: IStampBodyRequest) {
    return fetcher.patch("/revival", {
      image,
      user_id: userId,
      challenge_id: challengeId,
      day_count: dayCount,
    });
  },
  certificateStamp({ image, userId, challengeId, dayCount }: IStampBodyRequest) {
    return fetcher.patch("", {
      image,
      user_id: userId,
      challenge_id: challengeId,
      day_count: dayCount,
    });
  },
};
