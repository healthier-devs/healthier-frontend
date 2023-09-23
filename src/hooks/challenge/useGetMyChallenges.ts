import { useQuery } from "@tanstack/react-query";
import { challengeFetcher } from "src/api/challenge/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { IMyChallengeFinish, IMyChallengeProgress } from "src/interfaces/challenges";

interface IUseGetChallenges {
  status: "PROGRESS" | "CLOSED";
}

export const useGetMyChallenges = ({ status }: IUseGetChallenges) => {
  const {
    data: myChallengesData,
    isLoading,
    isSuccess,
  } = useQuery<IMyChallengeProgress[] | IMyChallengeFinish[]>({
    queryKey: [queryKeys.CHALLENGE, status],
    queryFn: () => challengeFetcher.getMyChallenge(status),
  });

  return {
    myChallengesData,
    isLoading,
    isSuccess,
  };
};
