import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup } from "src/api/account/service";
import { TKakaoSignUpRequest } from "src/interfaces/account";
import { useAppDispatch } from "src/state";
import { login as loginAction } from "src/state/authSlice";
import { saveToken } from "src/utils/cookies";

export const useKakaoSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mutate: signUpKakao } = useMutation({
    mutationFn: (request: { body: TKakaoSignUpRequest; accessToken: string; refreshToken: string }) =>
      signup({ type: "kakao", body: request.body, accessToken: request.accessToken }),
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

  return { signUpKakao };
};
