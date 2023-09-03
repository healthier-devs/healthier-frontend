import { useQuery } from "@tanstack/react-query";
import { challengeFetcher } from "src/api/challenge/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { IStampChartResponse } from "src/interfaces/challenges";

interface IUseGetChallengesProps {
  userId: string;
  challengeId: string;
}

export const useGetStampChart = ({ userId, challengeId }: IUseGetChallengesProps) => {
  const { data: stampChartData, isLoading } = useQuery<IStampChartResponse>({
    queryKey: [queryKeys.STAMP, userId, challengeId],
    queryFn: () => challengeFetcher.getStampChart({ userId, challengeId }),
  });

  return {
    stampChartData,
    isLoading,
  };
};
