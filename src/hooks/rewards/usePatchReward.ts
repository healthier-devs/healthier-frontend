import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "src/api/queryKeys";
import { rewardsFetcher } from "src/api/rewards/fetcher";

interface IUsePatchReward {
  successCallback: () => void;
}

interface IPatchRewardProps {
  userRewardId: number;
  rewardId: number;
  phoneNumber: string;
}

export const usePatchReward = ({ successCallback }: IUsePatchReward) => {
  const {
    mutate: patchReward,
    isSuccess,
    isError,
    isPending,
  } = useMutation({
    mutationFn: ({ userRewardId, rewardId, phoneNumber }: IPatchRewardProps) =>
      rewardsFetcher.patchReward(userRewardId, { rewardId, phoneNumber }),
    mutationKey: [queryKeys.STAMP],
    onSuccess: successCallback,
  });

  return {
    patchReward,
    isPending,
    isSuccess,
    isError,
  };
};
