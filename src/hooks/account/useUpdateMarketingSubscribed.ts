import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accountFetcher } from "src/api/account/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { IUpdateMarketingSubscribedRequest } from "src/interfaces/account";

interface IUseUpdateMarketingSubscribed {
  setIsMarketingNotiChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useUpdateMarketingSubscribed = ({ setIsMarketingNotiChecked }: IUseUpdateMarketingSubscribed) => {
  const queryClient = useQueryClient();
  const { mutate: updateMarketingSubscribed } = useMutation({
    mutationFn: (request: IUpdateMarketingSubscribedRequest) => accountFetcher.updateMarketingSubscribed(request),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [queryKeys.MARKETING_SUBSCRIBED] });
      setIsMarketingNotiChecked((isChecked) => !isChecked);
    },
  });

  return { updateMarketingSubscribed };
};
