import { useQuery } from "@tanstack/react-query";
import { challengeFetcher } from "src/api/challenge/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { IStampImagePresignedUrl } from "src/interfaces/challenges";

export const useGetPresignedUrl = () => {
  const {
    data: presignedUrlData,
    isLoading,
    isSuccess,
  } = useQuery<IStampImagePresignedUrl>({
    queryKey: [queryKeys.STAMP, "presignedUrl"],
    queryFn: () => challengeFetcher.getStampImageUrl(),
  });

  return {
    presignedUrlData,
    isLoading,
    isSuccess,
  };
};
