import { useMutation } from "@tanstack/react-query";
import { accountFetcher } from "src/api/account/fetcher";
import type { ISignInRequest } from "src/interfaces/account";

export const useSignIn = () => {
  const { mutate: signIn } = useMutation({
    mutationFn: (body: ISignInRequest) => accountFetcher.signInUser(body),
    onSuccess() {
      // TODO: 회원가입 성공 후처리
      alert("회원가입 성공");
    },
  });

  return { signIn };
};
