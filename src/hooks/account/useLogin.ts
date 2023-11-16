import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "src/api/account/service";
import { useAppDispatch } from "src/state";
import { login as loginAction } from "src/state/authSlice";
import { saveToken } from "src/utils/cookies";
import type { ILoginRequest } from "src/interfaces/account";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const { mutate: login, isSuccess } = useMutation({
    mutationFn: (body: ILoginRequest) => loginUser(body),
    onSuccess(data) {
      if (data && "accessToken" in data && "refreshToken" in data) {
        const { accessToken, refreshToken } = data;

        saveToken({ accessToken, refreshToken });
        dispatch(loginAction());

        queryClient.clear();
        navigate("/");

        return;
      }

      alert(data.message);
    },
  });

  return { login, isSuccess };
};
