import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { accountFetcher } from "src/api/account/fetcher";
import { queryKeys } from "src/api/queryKeys";
import { IInquiry } from "src/interfaces/account";

export const usePostInquiry = () => {
  const navigate = useNavigate();
  const { mutate: postInquiry } = useMutation({
    mutationFn: (inquiry: IInquiry) => accountFetcher.postInquiry(inquiry),
    onSuccess() {
      queryKeys.INQUIRY;
      alert("문의 등록이 완료됐습니다");
      navigate("/account");
    },
    onError() {
      alert("에러가 발생했습니다");
      navigate("/account");
    },
  });

  return { postInquiry };
};
