import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "src/api/queryKeys";
import { rewardsFetcher } from "src/api/rewards/fetcher";

interface IUsePatchRewardStatus {
  id: number;
}

export const usePatchRewardStatus = ({ id }: IUsePatchRewardStatus) => {
  const {
    mutate: patchRewardStatus,
    isSuccess,
    isError,
    isPending,
  } = useMutation({
    mutationFn: () => rewardsFetcher.patchRewardStatus(id),
    mutationKey: [queryKeys.STAMP, id],
  });

  return {
    patchRewardStatus,
    isPending,
    isSuccess,
    isError,
  };
};
