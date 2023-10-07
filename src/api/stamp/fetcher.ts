import { createFetcher } from "..";
import type { IStampBodyRequest } from "src/interfaces/challenges";

const fetcher = createFetcher("/stamp");

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
