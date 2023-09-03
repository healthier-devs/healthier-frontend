import { useQuery } from "@tanstack/react-query";
import { challengeFetcher } from "src/api/challenge/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { TChallengeListResponse } from "src/interfaces/challenges";

export const useGetChallenges = () => {
  const { data: challengesData, isLoading } = useQuery<TChallengeListResponse>({
    queryKey: [queryKeys.CHALLENGE],
    queryFn: () => challengeFetcher.getChallenges(),
  });

  return {
    challengesData,
    isLoading,
  };
};
