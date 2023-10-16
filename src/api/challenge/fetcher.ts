import { createFetcher } from "..";
import type {
  TChallengeListResponse,
  TChallengeCategoryListResponse,
  IMyChallengeProgressResponse,
  IStampImagePresignedUrl,
} from "src/interfaces/challenges";

const fetcher = createFetcher("/challenges");

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
  getStampImageUrl(): Promise<IStampImagePresignedUrl> {
    return fetcher.get("/image");
  },
  getChallengeByID({ challengeID }: { challengeID: number }) {
    return fetcher.get(`${challengeID}`);
  },
};
