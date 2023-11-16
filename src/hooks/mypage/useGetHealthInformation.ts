import { useQuery } from "@tanstack/react-query";
import { mypageFetcher } from "src/api/mypage/fetcher";
import { queryKeys } from "src/api/queryKeys";

const DEFAULT_HEALTH_INFORMATION_DATA = {
  drinkingAmount: "마시지 않음",
  smokingAmount: {
    smoking: false,
    years: 0,
    timesPerDay: 0,
  },
  underlyingDiseases: [],
  medicines: [],
  continuousMedicines: [],
  prevSurgery: [],
};

export const useGetHealthInformation = () => {
  const { data: healthInformationData, isLoading } = useQuery({
    queryKey: [queryKeys.MYPAGE, "health-information"],
    queryFn: () => mypageFetcher.getHealthInfo(),
  });

  return {
    healthInformationData: healthInformationData ?? DEFAULT_HEALTH_INFORMATION_DATA,
    isLoading,
  };
};
