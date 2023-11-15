import { useQuery } from "@tanstack/react-query";
import { accountFetcher } from "src/api/account/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { INotificationSubscribedResponse } from "src/interfaces/account";

const DEFAULT_NOTI_SUBSCRIBED_DATA: INotificationSubscribedResponse = {
  pushNotification: false,
  marketing: false,
};

export const useGetNotiSubscribed = () => {
  const { data: notiSubscribedData } = useQuery({
    queryKey: [queryKeys.MARKETING_SUBSCRIBED, queryKeys.PUSH_SUBSCRIBED],
    queryFn: () => accountFetcher.getIsNotificationSubscribed(),
  });

  return { notiSubscribedData: notiSubscribedData ?? DEFAULT_NOTI_SUBSCRIBED_DATA };
};
