import { useQuery } from "@tanstack/react-query";
import { stampFetcher } from "src/api/stamp/fetcher";
import type { IStampChartResponse } from "src/interfaces/stamp";

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
    queryKey: [challengeId],
    queryFn: () => stampFetcher.getStampChart(challengeId),
  });

  return {
    stampChartData,
    refetch,
    isLoading,
    isSuccess,
  };
};
