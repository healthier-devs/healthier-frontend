import { useQueries } from "@tanstack/react-query";
import { accountFetcher } from "src/api/account/fetcher";
import { queryKeys } from "src/api/queryKeys";

const DEFAULT_NOTI_SUBSCRIBED_DATA = {
  push: false,
  marketing: false,
};

export const useGetNotiSubscribed = () => {
  const { data: notiSubscribedData } = useQueries({
    queries: [
      { queryKey: [queryKeys.ACCOUNT, queryKeys.NOTIFICATION_SUBSCRIBED], queryFn: () => accountFetcher.getIsNotificationSubscribed() },
      { queryKey: [queryKeys.ACCOUNT, queryKeys.NOTIFICATION_SUBSCRIBED], queryFn: () => accountFetcher.getIsMarketingSubscribed() },
    ],
    combine: (results) => {
      const [pushData, marketingData] = results;

      return {
        data: {
          push: pushData.data?.status ?? false,
          marketing: marketingData.data?.status ?? false,
        },
      };
    },
  });

  return { notiSubscribedData: notiSubscribedData ?? DEFAULT_NOTI_SUBSCRIBED_DATA };
};
