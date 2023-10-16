import { useQuery } from "@tanstack/react-query";
import { mypageFetcher } from "src/api/mypage/fetcher";
import { queryKeys } from "src/api/queryKeys";

export const useGetAnnouncements = () => {
  const { data: announcementData, isLoading } = useQuery({
    queryKey: [queryKeys.MYPAGE],
    queryFn: () => mypageFetcher.getAllAnnouncement(),
  });

  return {
    announcementData,
    isLoading,
  };
};
