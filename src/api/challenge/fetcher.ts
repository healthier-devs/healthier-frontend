import axios, { AxiosResponse } from "axios";
import type { TChallengeListResponse, TChallengeCategoryListResponse, IMyChallengeProgressResponse } from "src/interfaces/challenges";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/challenges`,
  timeout: 1500,
});

const responseBody = (response: AxiosResponse) => response.data;

const fetcher = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
  delete: <T>(url: string, body: { data: T }) => instance.delete<T>(url, body).then(responseBody),
  patch: <T>(url: string, body: T) => instance.patch<T>(url, body).then(responseBody),
};

export const challengeFetcher = {
  getChallengeCategory(): Promise<TChallengeCategoryListResponse> {
    return fetcher.get("/category");
  },
  getChallengesByCategory(category: string, pageInfo: { page: number; size: number }): Promise<TChallengeListResponse> {
    return fetcher.get(`/category/${category}?page=${pageInfo.page}&size=${pageInfo.size}`);
  },
  getMyChallenge(status: "PROGRESS" | "CLOSED"): Promise<IMyChallengeProgressResponse> {
    return fetcher.get(`/my-challenges?status=${status}`);
  },
};
