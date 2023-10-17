import { useQuery } from "@tanstack/react-query";
import { mypageFetcher } from "src/api/mypage/fetcher";
import { queryKeys } from "src/api/queryKeys";

export const useGetAnnouncementById = (announcementID: string) => {
  const { data: announcementData, isLoading } = useQuery({
    queryKey: [queryKeys.MYPAGE, announcementID],
    queryFn: () => mypageFetcher.getAnnouncementById(announcementID),
  });

  return {
    announcementData,
    isLoading,
  };
};
