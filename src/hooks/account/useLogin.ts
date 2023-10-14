import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "src/api/account/service";
import { ACCESS_TOKEN_AGE } from "src/data/account";
import { useAppDispatch } from "src/state";
import { login as loginAction } from "src/state/authSlice";
import { setCookie } from "src/utils/cookies";
import type { ILoginRequest } from "src/interfaces/account";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mutate: login } = useMutation({
    mutationFn: (body: ILoginRequest) => loginUser(body),
    onSuccess(data) {
      if ("accessToken" in data && "refreshToken" in data) {
        const { accessToken, refreshToken } = data;

        setCookie("accessToken", accessToken, {
          path: "/",
          secure: false,
          domain: "localhost",
          maxAge: ACCESS_TOKEN_AGE,
        });
        setCookie("refreshToken", refreshToken, {
          path: "/",
          secure: false, // TODO: 배포 시에는 HTTPS 설정을 위해 true로 변경
          domain: "localhost",
        });
        dispatch(loginAction());

        navigate("/");

        return;
      }

      alert(data.message);
    },
  });

  return { login };
};
