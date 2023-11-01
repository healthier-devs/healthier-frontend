import { useQuery } from "@tanstack/react-query";
import { accountFetcher } from "src/api/account/fetcher";
import { queryKeys } from "src/api/queryKeys";

export const useUserData = () => {
  const { data: userData, isLoading } = useQuery({
    queryKey: [queryKeys.MYPAGE, "userData"],
    queryFn: () => accountFetcher.getUserData(),
  });

  return {
    userData,
    isLoading,
  };
};
