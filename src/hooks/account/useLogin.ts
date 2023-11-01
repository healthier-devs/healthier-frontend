import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "src/api/account/service";
import { DEVELOPMENT_SET_COOKIE_OPTIONS, DEPLOYMENT_SET_COOKIE_OPTIONS, ACCESS_TOKEN_AGE, REFRESH_TOKEN_AGE } from "src/data/account";
import { useAppDispatch } from "src/state";
import { login as loginAction } from "src/state/authSlice";
import { setCookie } from "src/utils/cookies";
import type { ILoginRequest } from "src/interfaces/account";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const { mutate: login, isSuccess } = useMutation({
    mutationFn: (body: ILoginRequest) => loginUser(body),
    onSuccess(data, body) {
      if ("accessToken" in data && "refreshToken" in data) {
        const { accessToken, refreshToken } = data;

        setCookie("accessToken", accessToken, {
          ...DEVELOPMENT_SET_COOKIE_OPTIONS,
          maxAge: ACCESS_TOKEN_AGE,
        });
        setCookie("refreshToken", refreshToken, {
          ...DEVELOPMENT_SET_COOKIE_OPTIONS,
          maxAge: REFRESH_TOKEN_AGE,
        });
        queryClient.clear();
        dispatch(
          loginAction({
            email: body.username,
          })
        );

        return;
      }

      alert(data.message);
    },
  });

  return { login, isSuccess };
};
