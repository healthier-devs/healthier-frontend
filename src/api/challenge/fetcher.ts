import { createFetcher, createUnauthorizedFetcher } from "..";
import type {
  TChallengeListResponse,
  TChallengeCategoryListResponse,
  IMyChallengeProgressResponse,
  IStampImagePresignedUrl,
  IChallengeDetailResponse,
} from "src/interfaces/challenges";

const fetcher = createFetcher("/challenges");
const unauthorizedFetcher = createUnauthorizedFetcher("/challenges");

export const challengeFetcher = {
  getChallengeCategory(): Promise<TChallengeCategoryListResponse> {
    return unauthorizedFetcher.get("/category");
  },
  getChallengesByCategory(category: string, pageInfo: { page: number; size: number }): Promise<TChallengeListResponse> {
    return unauthorizedFetcher.get(`/category/${category}?page=${pageInfo.page}&size=${pageInfo.size}`);
  },
  getMyChallenge(status: "PROGRESS" | "CLOSED"): Promise<IMyChallengeProgressResponse> {
    return fetcher.get(`/my-challenges?status=${status}`);
  },
  getStampImageUrl(): Promise<IStampImagePresignedUrl> {
    return fetcher.get("/image");
  },
  getChallengeByID({ challengeID }: { challengeID: number }): Promise<IChallengeDetailResponse> {
    return fetcher.get(`${challengeID}`);
  },
  postChallengeJoin({ challengeId, isToday }: { challengeId: number; isToday: number }) {
    return fetcher.post(`/join/${challengeId}?isToday=${isToday}`);
  },
};
