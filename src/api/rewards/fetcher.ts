import { createFetcher } from "..";

const fetcher = createFetcher("/rewards");

export const rewardsFetcher = {
  getRewards(point: number) {
    return fetcher.get(``, { point });
  },
  getMyRewardRecords() {
    return fetcher.get(`/records`);
  },
  patchReward(id: number, body: { rewardId: number; phoneNumber: string }) {
    return fetcher.patch(`/${id}`, body);
  },
};
