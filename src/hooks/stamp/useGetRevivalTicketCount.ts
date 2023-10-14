import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "src/api/queryKeys";
import { stampFetcher } from "src/api/stamp/fetcher";
import { IStampRevivalTicketCountResponse } from "src/interfaces/stamp";

export const useGetRevivalTicketCount = () => {
  const { data: revivalCount, isLoading } = useQuery<IStampRevivalTicketCountResponse>({
    queryKey: [queryKeys.STAMP, "revivalTicket"],
    queryFn: () => stampFetcher.getRevivalTicketCount(),
  });

  return {
    revivalCount,
    isLoading,
  };
};
