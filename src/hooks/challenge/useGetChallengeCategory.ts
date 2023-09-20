import { useQuery } from "@tanstack/react-query";
import { challengeFetcher } from "src/api/challenge/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { TChallengeCategoryListResponse } from "src/interfaces/challenges";

export const useGetChallengeCategory = () => {
  const {
    data: challengeCategoryData,
    isLoading,
    isSuccess,
  } = useQuery<TChallengeCategoryListResponse>({
    queryKey: [queryKeys.CHALLENGE],
    queryFn: () => challengeFetcher.getChallengeCategory(),
  });

  return {
    challengeCategoryData,
    isLoading,
    isSuccess,
  };
};
