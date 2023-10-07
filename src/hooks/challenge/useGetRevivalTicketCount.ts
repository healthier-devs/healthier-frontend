import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "src/api/queryKeys";
import { stampFetcher } from "src/api/stamp/fetcher";
import { IStampRevivalTicketCountResponse } from "src/interfaces/challenges";

export const useGetRevivalTicketCount = () => {
  const { data: revivalCount, isLoading } = useQuery<IStampRevivalTicketCountResponse>({
    queryKey: [queryKeys.STAMP],
    queryFn: () => stampFetcher.getRevivalTicketCount(),
  });

  return {
    revivalCount,
    isLoading,
  };
};