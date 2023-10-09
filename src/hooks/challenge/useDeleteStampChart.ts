import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "src/api/queryKeys";
import { stampFetcher } from "src/api/stamp/fetcher";

interface IUseDeleteStampChart {
  id: number;
  successCallback: () => void;
}

export const useDeleteStampChart = ({ id, successCallback }: IUseDeleteStampChart) => {
  const {
    mutate: deleteStamp,
    isSuccess,
    isError,
    isPending,
  } = useMutation({
    mutationFn: () => stampFetcher.deleteStampChart(id),
    mutationKey: [queryKeys.STAMP, id],
    onSuccess() {
      successCallback();
    },
  });

  return {
    deleteStamp,
    isPending,
    isSuccess,
    isError,
  };
};
