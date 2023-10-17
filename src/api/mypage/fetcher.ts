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
};
