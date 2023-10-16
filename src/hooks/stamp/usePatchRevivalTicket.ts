import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "src/api/queryKeys";
import { stampFetcher } from "src/api/stamp/fetcher";

interface IUsePatchRevivalTicket {
  id: number;
  onSuccessRevival: () => void;
}

export const usePatchRevivalTicket = ({ id, onSuccessRevival }: IUsePatchRevivalTicket) => {
  const {
    mutate: patchRevivalTicket,
    isSuccess,
    isError,
    isPending,
  } = useMutation({
    mutationFn: () => stampFetcher.reviveStampChart(id),
    mutationKey: [queryKeys.STAMP, id],
    onSuccess() {
      onSuccessRevival();
    },
  });

  return {
    patchRevivalTicket,
    isPending,
    isSuccess,
    isError,
  };
};
