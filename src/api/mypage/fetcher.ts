import { createFetcher } from "..";

// const fetcher = createFetcher("/notices");
const fetcher = createFetcher("/");

export const mypageFetcher = {
  getAllAnnouncement() {
    return fetcher.get("/notices?page=0&size=15");
  },
  getAnnouncementById(id: string) {
    return fetcher.get(`/notices/${id}`);
  },
  getMarketingData() {
    return fetcher.get("/marketing");
  },
  getPushData() {
    return fetcher.get("/push");
  },
  setMarketingData(userEmail: string, marketingData: boolean) {
    return fetcher.post(`/${userEmail}/marketing?subscribed=${marketingData}`);
  },
  getHealthInfo() {
    return fetcher.get("/health-information");
  },
};
