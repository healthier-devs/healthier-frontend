import axios from "axios";
import { createFetcher, responseBody } from "..";

const fetcher = createFetcher("/stamp");

export const stampFetcher = {
  getStampChart(id: number) {
    return fetcher.get(`/${id}`);
  },
  deleteStampChart(id: number) {
    return fetcher.delete(`/${id}`);
  },
  patchStampChart(id: number, image: string) {
    return fetcher.patch(`/${id}?image=${image}`);
  },
  reviveStampChart(id: number) {
    return fetcher.patch(`/revival/${id}`);
  },
  getRevivalTicketCount() {
    console.log("ticket 요청");

    return fetcher.get("/revival/tickets");
  },
  async putStampImage(url: string, file: File) {
    return axios.put(url, file).then(responseBody);
  },
};
