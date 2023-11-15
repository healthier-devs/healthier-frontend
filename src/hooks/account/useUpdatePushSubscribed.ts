import { useMutation, useQueryClient } from "@tanstack/react-query";
import { accountFetcher } from "src/api/account/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { IUpdateNotiRequest } from "src/interfaces/account";

interface IUseUpdatePushSubscribed {
  setIsPushNotiChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useUpdatePushSubscribed = ({ setIsPushNotiChecked }: IUseUpdatePushSubscribed) => {
  const queryClient = useQueryClient();
  const { mutate: updatePushSubscribed } = useMutation({
    mutationFn: (request: IUpdateNotiRequest) => accountFetcher.updatePushSubscribed(request),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [queryKeys.PUSH_SUBSCRIBED] });
      setIsPushNotiChecked((isChecked) => !isChecked);
    },
  });

  return { updatePushSubscribed };
};
