import { useMutation } from "@tanstack/react-query";
import { accountFetcher } from "src/api/account/fetcher";
import type { ISignUpRequest } from "src/interfaces/account";

export const useSignUp = () => {
  const { mutate: signUp } = useMutation({
    mutationFn: (body: ISignUpRequest) => accountFetcher.signUpUser(body),
    onSuccess() {
      // TODO: 회원가입 성공 후처리
      alert("회원가입 성공");
    },
  });

  return { signUp };
};
