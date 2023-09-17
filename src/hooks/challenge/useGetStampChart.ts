import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "src/api/queryKeys";
import { stampFetcher } from "src/api/stamp/fetcher";
import type { IStampChartResponse } from "src/interfaces/challenges";

interface IUseGetChallengesProps {
  userId: string;
  challengeId: string;
}

export const useGetStampChart = ({ userId, challengeId }: IUseGetChallengesProps) => {
  const { data: stampChartData, isLoading } = useQuery<IStampChartResponse>({
    queryKey: [queryKeys.STAMP, userId, challengeId],
    queryFn: () => stampFetcher.getStampChart({ userId, challengeId }),
  });

  return {
    stampChartData,
    isLoading,
  };
};
