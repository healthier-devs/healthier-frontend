import axios, { AxiosResponse } from "axios";
import type { TChallengeListResponse } from "src/interfaces/challenges";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/challenges`,
  timeout: 1500,
});

const responseBody = (response: AxiosResponse) => response.data;

const fetcher = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
};

export const challengeFetcher = {
  getChallenges(): Promise<TChallengeListResponse> {
    return fetcher.get("");
  },
};
