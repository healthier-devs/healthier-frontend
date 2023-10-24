import { createUnauthorizedFetcher } from "..";
import type { TLocation, TAdvertisementResponse } from "src/interfaces/advertisement";

const fetcher = createUnauthorizedFetcher("/advertisement");

export const adFetcher = {
  getAdvertisement(location: TLocation): Promise<TAdvertisementResponse> {
    return fetcher.get(`/${location}`);
  },
};
