import { createFetcher } from "..";

const fetcher = createFetcher("/inquiry");

export interface IPostInquiryRequest {
  hospitalId: string;
  hospitalName: string;
  inquiryType: "INFO_UPDATE_INQUIRY" | "CHALLENGE_INQUIRY" | "OTHERS";
  inquiryContent: string;
}

export const inquiryFetcher = {
  postInquiry(body: IPostInquiryRequest) {
    return fetcher.post(``, body);
  },
};
