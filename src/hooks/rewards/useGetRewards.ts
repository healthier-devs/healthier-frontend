import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "src/api/queryKeys";
import { rewardsFetcher } from "src/api/rewards/fetcher";
import { TRewardsResponse } from "src/interfaces/rewards";

interface IUseGetRewards {
  point: number;
}

export const useGetRewards = ({ point }: IUseGetRewards) => {
  const { data: rewardsData, isLoading } = useQuery<TRewardsResponse>({
    queryKey: [queryKeys.REWARDS, point],
    queryFn: () => rewardsFetcher.getRewards(point),
  });

  return {
    rewardsData,
    isLoading,
  };
};
