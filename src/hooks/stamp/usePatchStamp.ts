import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "src/api/queryKeys";
import { stampFetcher } from "src/api/stamp/fetcher";

interface IUsePatchStamp {
  id: number;
  image: string;
  refetch: any;
  onSuccessImageUpload: () => void;
}

export const usePatchStamp = ({ id, image, refetch, onSuccessImageUpload }: IUsePatchStamp) => {
  const {
    mutate: patchStamp,
    isSuccess,
    isError,
    isPending,
  } = useMutation({
    mutationFn: () => stampFetcher.patchStampChart(id, image),
    mutationKey: [queryKeys.STAMP, id, image],
    onSuccess() {
      onSuccessImageUpload();
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
