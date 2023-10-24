import { useQuery } from "@tanstack/react-query";
import { challengeFetcher } from "src/api/challenge/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { IMyChallengeFinishResponse, IMyChallengeProgressResponse } from "src/interfaces/challenges";

interface IUseGetChallenges {
  status: "PROGRESS" | "CLOSED";
  authenticated: boolean;
}

export const useGetMyChallenges = ({ status, authenticated }: IUseGetChallenges) => {
  const {
    data: myChallengesData,
    isLoading,
    isSuccess,
  } = useQuery<IMyChallengeProgressResponse | IMyChallengeFinishResponse>({
    queryKey: [queryKeys.CHALLENGE, status],
    queryFn: () => challengeFetcher.getMyChallenge(status),
    enabled: authenticated,
  });

  return {
    myChallengesData,
    isLoading,
    isSuccess,
  };
};
