import { useQuery } from "@tanstack/react-query";
import { challengeFetcher } from "src/api/challenge/fetcher";
import { queryKeys } from "src/api/queryKeys";

export const useGetChallengeById = (challengeID: number) => {
  const { data: challengeData, isLoading } = useQuery({
    queryKey: [queryKeys.CHALLENGE, challengeID],
    queryFn: () => challengeFetcher.getChallengeByID({ challengeID }),
  });

  return {
    challengeData,
    isLoading,
  };
};
