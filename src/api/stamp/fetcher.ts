import axios, { AxiosResponse } from "axios";
import type { IStampChartRequest } from "src/interfaces/challenges";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/stamp`,
  timeout: 1500,
});

const responseBody = (response: AxiosResponse) => response.data;

const fetcher = {
  get: <T>(url: string, params?: object) => instance.get<T>(url, { params }).then(responseBody),
  post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
  delete: <T>(url: string, body: { data: T }) => instance.delete<T>(url, body).then(responseBody),
  patch: <T>(url: string, body: T) => instance.patch<T>(url, body).then(responseBody),
};

export const stampFetcher = {
  getStampChart({ userId, challengeId }: IStampChartRequest) {
    return fetcher.get(``, { user_id: userId, challenge_id: challengeId });
  },
  createStampChart({ userId, challengeId }: IStampChartRequest) {
    return fetcher.post("", {
      user_id: userId,
      challenge_id: challengeId,
    });
  },
  deleteStampChart({ userId, challengeId }: IStampChartRequest) {
    return fetcher.delete("", {
      data: {
        user_id: userId,
        challenge_id: challengeId,
      },
    });
  },
  certifyStampChart({ userId, challengeId, dayCount }: IStampChartRequest & { dayCount: number }) {
    return fetcher.patch("", {
      user_id: userId,
      challenge_id: challengeId,
      day_count: dayCount,
    });
  },
  reviveStampChart({ userId, challengeId, dayCount }: IStampChartRequest & { dayCount: number }) {
    return fetcher.patch("/revival", {
      user_id: userId,
      challenge_id: challengeId,
      day_count: dayCount,
    });
  },
};
