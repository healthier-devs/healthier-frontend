import { useQuery } from "@tanstack/react-query";
import { challengeFetcher } from "src/api/challenge/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { IChallengeDetailResponse } from "src/interfaces/challenges";

const DEFAULT_CHALLENGE_DETAIL_DATA: IChallengeDetailResponse = {
  participationStatus: false,
  challengeRetryBlocked: false,
  challenge: {
    id: 0,
    title: "",
    category: "",
    count: 0,
    midtermGift: 0,
    finalGift: 0,
    duration: "",
    times: "",
    method: "",
    notice: "",
    basicImage: "",
    whatContent: "",
    whyContent: "",
    tipSubtitle: "",
    tipContent: "",
    guide: "",
    successImage1: "",
    successImage2: "",
    failImage1: "",
    failImage2: "",
    status: "READY",
  },
};

export const useGetChallengeById = (challengeID: number) => {
  const { data: challengeData, isLoading } = useQuery({
    queryKey: [queryKeys.CHALLENGE, challengeID],
    queryFn: () => challengeFetcher.getChallengeByID({ challengeID }),
  });

  return {
    challengeData: challengeData ?? DEFAULT_CHALLENGE_DETAIL_DATA,
    isLoading,
  };
};
