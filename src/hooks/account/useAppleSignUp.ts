import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup } from "src/api/account/service";
import { useLogin } from "./useLogin";
import type { TSignUp, TAppleSignUpRequest } from "src/interfaces/account";

export const useAppleSignUp = () => {
  const navigate = useNavigate();

  const { mutate: signUpApple } = useMutation({
    mutationFn: (body: TAppleSignUpRequest) => signup({ type: "apple", body }),
    onSuccess(data) {
      if (data.success) {
        navigate("/signup/complete");

        return;
      }
    },
  });

  return { signUpApple };
};
