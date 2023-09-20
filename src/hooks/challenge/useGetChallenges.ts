import { useQuery } from "@tanstack/react-query";
import { challengeFetcher } from "src/api/challenge/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { TChallengeListResponse } from "src/interfaces/challenges";

interface IUseGetChallenges {
  category: string;
  enabled: boolean;
  pageInfo: {
    page: number;
    size: number;
  };
}

export const useGetChallenges = ({ category, enabled, pageInfo }: IUseGetChallenges) => {
  const { data: challengesData, isLoading } = useQuery<TChallengeListResponse>({
    queryKey: [queryKeys.CHALLENGE, category, pageInfo],
    queryFn: () => challengeFetcher.getChallengesByCategory(category, pageInfo),
    enabled,
  });

  return {
    challengesData,
    isLoading,
  };
};
