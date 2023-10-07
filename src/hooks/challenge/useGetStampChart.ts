import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "src/api/queryKeys";
import { stampFetcher } from "src/api/stamp/fetcher";
import type { IStampChartResponse } from "src/interfaces/challenges";

interface IUseGetChallengesProps {
  challengeId: number;
}

export const useGetStampChart = ({ challengeId }: IUseGetChallengesProps) => {
  const {
    data: stampChartData,
    refetch,
    isLoading,
    isSuccess,
  } = useQuery<IStampChartResponse>({
    queryKey: [queryKeys.STAMP, challengeId],
    queryFn: () => stampFetcher.getStampChart(challengeId),
  });

  return {
    stampChartData,
    refetch,
    isLoading,
    isSuccess,
  };
};
