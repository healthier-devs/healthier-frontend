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
  reviveStampChart({ id }: IStampBodyRequest) {
    return fetcher.patch(`/revival/${id}`);
  },
};
