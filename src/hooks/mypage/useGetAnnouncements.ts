import { useQuery } from "@tanstack/react-query";
import { mypageFetcher } from "src/api/mypage/fetcher";
import { queryKeys } from "src/api/queryKeys";
import { IUseGetAnnouncements } from "src/interfaces/mypage";

export const useGetAnnouncements = ({ pageInfo }: IUseGetAnnouncements) => {
  const { data: announcementData, isLoading } = useQuery({
    queryKey: [queryKeys.MYPAGE, pageInfo],
    queryFn: () => mypageFetcher.getAllAnnouncement({ pageInfo }),
  });

  return {
    announcementData,
    isLoading,
  };
};
