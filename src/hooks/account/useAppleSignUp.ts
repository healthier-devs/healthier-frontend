import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup } from "src/api/account/service";
import { useAppDispatch } from "src/state";
import { login as loginAction } from "src/state/authSlice";
import { saveToken } from "src/utils/cookies";
import type { TAppleSignUpRequest } from "src/interfaces/account";

export const useAppleSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mutate: signUpApple } = useMutation({
    mutationFn: (request: { accessToken: string; refreshToken: string; body: TAppleSignUpRequest }) =>
      signup({ type: "apple", body: request.body, accessToken: request.accessToken }),
    onSuccess(data, variables) {
      if (data.success) {
        const { accessToken, refreshToken } = variables;

        saveToken({ accessToken, refreshToken });
        dispatch(loginAction());

        navigate("/signup/complete");

        return;
      }
    },
  });

  return { signUpApple };
};
