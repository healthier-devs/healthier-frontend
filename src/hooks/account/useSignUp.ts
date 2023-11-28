import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup } from "src/api/account/service";
import { useLogin } from "./useLogin";
import type { ISignUpRequest } from "src/interfaces/account";

export const useSignUp = () => {
  const navigate = useNavigate();
  const { login } = useLogin();
  const { mutate: signUp } = useMutation({
    mutationFn: (body: ISignUpRequest) => signup({ type: "local", body }),
    onSuccess(data, variables) {
      if (data.success) {
        login({
          username: variables.username,
          password: variables.password,
        });
        navigate("/signup/complete");

        return;
      }
    },
  });

  return { signUp };
};
