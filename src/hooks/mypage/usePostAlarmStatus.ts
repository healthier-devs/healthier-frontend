import { useMutation } from "@tanstack/react-query";
import { mypageFetcher } from "src/api/mypage/fetcher";

interface IUsePostAlarmStatus {
  userEmail: string;
  marketingData: boolean;
}

export const usePostAlarmStatus = ({ userEmail, marketingData }: IUsePostAlarmStatus) => {
  const { mutate: postAlarmStatus } = useMutation({
    mutationFn: () => mypageFetcher.setMarketingData(userEmail, marketingData),
  });

  return { postAlarmStatus };
};
