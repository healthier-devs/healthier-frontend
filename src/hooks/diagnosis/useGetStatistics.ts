import { useQuery } from "@tanstack/react-query";
import { diagnosisFetcher } from "src/api/diagnosis/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { IDiagnosisStatisticsResponse } from "src/interfaces/diagnoseApi/statistics";
import type { IAuthState } from "src/state";

const DEFAULT_STATISTICS_DATA: IDiagnosisStatisticsResponse = {
  ageGroup: "",
  name: "",
  image: "",
};

export const useGetStatistics = ({ authenticated }: Pick<IAuthState, "authenticated">) => {
  const { data: statisticsData } = useQuery({
    queryKey: [queryKeys.STATISTICS],
    queryFn: () => diagnosisFetcher.getStatistics(),
    enabled: authenticated,
  });

  return { statisticsData: statisticsData ?? DEFAULT_STATISTICS_DATA };
};
