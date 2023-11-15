import { useQuery } from "@tanstack/react-query";
import { accountFetcher } from "src/api/account/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { IUserInfo } from "src/interfaces/account";

const DEFAULT_USER_DATA: IUserInfo = {
  name: "",
  username: "",
  gender: "",
  age: 0,
  healthInterests: [],
};

export const useUserData = () => {
  const { data: userData } = useQuery({
    queryKey: [queryKeys.MYPAGE, "userData"],
    queryFn: () => accountFetcher.getUserData(),
  });

  return {
    userData: userData ?? DEFAULT_USER_DATA,
  };
};
