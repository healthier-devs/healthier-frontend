import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "src/api/queryKeys";
import { stampFetcher } from "src/api/stamp/fetcher";
import { usePatchStamp } from "./usePatchStamp";

interface IUsePutStampImage {
  id: number;
  url: string;
  refetch: any;
}

interface IPutStampProps {
  imageFile: File;
}

export const usePutStampImage = ({ id, url, refetch }: IUsePutStampImage) => {
  const { patchStamp } = usePatchStamp({ id, image: url.split("?")[0], refetch });

  const {
    mutate: putStampImage,
    isSuccess,
    isError,
    isPending,
  } = useMutation({
    mutationFn: ({ imageFile }: IPutStampProps) => stampFetcher.putStampImage(url, imageFile),
    mutationKey: [queryKeys.STAMP, url, id],
    onSuccess() {
      patchStamp();
    },
  });

  return {
    putStampImage,
    isPending,
    isSuccess,
    isError,
  };
};
