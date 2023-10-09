import { createFetcher } from "..";

export type TInvitationCodeResponse = {
  code: string;
};

const fetcher = createFetcher("/invitation");

export const invitationFetcher = {
  getInvitationCode(): Promise<TInvitationCodeResponse> {
    return fetcher.get("");
  },
};
