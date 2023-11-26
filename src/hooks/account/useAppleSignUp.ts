import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup } from "src/api/account/service";
import type { TAppleSignUpRequest } from "src/interfaces/account";

export const useAppleSignUp = () => {
  const navigate = useNavigate();

  const { mutate: signUpApple } = useMutation({
    mutationFn: (request: { accessToken: string; body: TAppleSignUpRequest }) =>
      signup({ type: "apple", body: request.body, accessToken: request.accessToken }),
    onSuccess(data) {
      if (data.success) {
        navigate("/signup/complete");

        return;
      }
    },
  });

  return { signUpApple };
};
