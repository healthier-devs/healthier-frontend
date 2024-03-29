import { IHealthInformation, IUseGetAnnouncements } from "src/interfaces/mypage";
import { createFetcher } from "..";

// const fetcher = createFetcher("/notices");
const fetcher = createFetcher("/");

export const mypageFetcher = {
  getAllAnnouncement({ pageInfo }: IUseGetAnnouncements) {
    return fetcher.get(`/notices?page=${pageInfo.page}&size=10`);
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
  setHealthInformation(healthData: IHealthInformation) {
    return fetcher.put("/health-information", healthData);
  },
};
