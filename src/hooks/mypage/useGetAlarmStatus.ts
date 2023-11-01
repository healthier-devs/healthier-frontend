import { useQuery } from "@tanstack/react-query";
import { mypageFetcher } from "src/api/mypage/fetcher";
import { queryKeys } from "src/api/queryKeys";

export const useGetAlarmStatus = () => {
  const getAlarmData = async () => {
    const marketingData = mypageFetcher.getMarketingData();
    const pushData = mypageFetcher.getPushData();
    const [marketing, push] = await Promise.all([marketingData, pushData]);

    return {
      marketing,
      push,
    };
  };

  const { data: alarmStatusData, isLoading } = useQuery({
    queryKey: [queryKeys.MYPAGE],
    queryFn: getAlarmData,
  });

  return {
    alarmStatusData,
    isLoading,
  };
};
