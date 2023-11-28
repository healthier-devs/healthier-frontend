import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "src/api/queryKeys";
import { rewardsFetcher } from "src/api/rewards/fetcher";
import { TMyRewardRecordsResponse } from "src/interfaces/rewards";

export const useGetMyRewardRecords = ({ authenticated }: { authenticated: boolean }) => {
  const { data: myRewardRecordsData, isLoading } = useQuery<TMyRewardRecordsResponse>({
    queryKey: [queryKeys.REWARDS, "records"],
    queryFn: () => rewardsFetcher.getMyRewardRecords(),
    enabled: authenticated,
  });

  return {
    myRewardRecordsData,
    isLoading,
  };
};
