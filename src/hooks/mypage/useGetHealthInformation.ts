import { useQuery } from "@tanstack/react-query";
import { mypageFetcher } from "src/api/mypage/fetcher";
import { queryKeys } from "src/api/queryKeys";

export const useGetHealthInformation = () => {
  const { data: healthInformationData, isLoading } = useQuery({
    queryKey: [queryKeys.MYPAGE, "health-information"],
    queryFn: () => mypageFetcher.getHealthInfo(),
  });

  return {
    healthInformationData,
    isLoading,
  };
};
