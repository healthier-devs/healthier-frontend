import { createFetcher } from "..";

const fetcher = createFetcher("/rewards");

export const rewardsFetcher = {
  getRewards(point: number) {
    return fetcher.get(``, { point });
  },
  getMyRewardRecords() {
    return fetcher.get(`/records`);
  },
  patchRewardStatus(id: number) {
    return fetcher.patch(`/status/${id}`);
  },
};
