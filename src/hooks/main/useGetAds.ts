import { useQuery } from "@tanstack/react-query";
import { adFetcher } from "src/api/advertisement/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { TLocation } from "src/interfaces/advertisement";

export const useGetAds = (location: TLocation) => {
  const { data: adsData, isLoading } = useQuery({
    queryKey: [queryKeys.ADVERTISEMENT, location],
    queryFn: () => adFetcher.getAdvertisement(location),
  });

  return {
    adsData,
    isLoading,
  };
};
