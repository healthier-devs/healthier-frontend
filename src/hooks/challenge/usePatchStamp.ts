import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "src/api/queryKeys";
import { stampFetcher } from "src/api/stamp/fetcher";

interface IUsePatchStamp {
  id: number;
  image: string;
  refetch: any;
}

export const usePatchStamp = ({ id, image, refetch }: IUsePatchStamp) => {
  const {
    mutate: patchStamp,
    isSuccess,
    isError,
    isPending,
  } = useMutation({
    mutationFn: () => stampFetcher.patchStampChart(id, image),
    mutationKey: [queryKeys.STAMP, id, image],
    onSuccess() {
      refetch();
    },
  });

  return {
    patchStamp,
    isPending,
    isSuccess,
    isError,
  };
};
