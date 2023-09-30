import { createFetcher } from "..";
import type { TChallengeListResponse, TChallengeCategoryListResponse } from "src/interfaces/challenges";

const fetcher = createFetcher("/challenges");

export const challengeFetcher = {
  getChallengeCategory(): Promise<TChallengeCategoryListResponse> {
    return fetcher.get("/category");
  },
  getChallengesByCategory(category: string, pageInfo: { page: number; size: number }): Promise<TChallengeListResponse> {
    return fetcher.get(`/category/${category}?page=${pageInfo.page}&size=${pageInfo.size}`);
  },
};
