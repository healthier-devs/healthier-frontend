import { useMutation } from "@tanstack/react-query";
import { accountFetcher } from "src/api/account/fetcher";
import { queryKeys } from "src/api/queryKeys";
import { IInquiry } from "src/interfaces/account";

export const usePostInquiry = () => {
  const { mutate: postInquiry } = useMutation({
    mutationFn: (inquiry: IInquiry) => accountFetcher.postInquiry(inquiry),
    onSuccess() {
      queryKeys.INQUIRY;
    },
  });

  return { postInquiry };
};
