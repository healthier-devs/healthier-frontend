import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "src/api/account/service";
import type { ILoginRequest } from "src/interfaces/account";

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate: login } = useMutation({
    mutationFn: (body: ILoginRequest) => loginUser(body),
    onSuccess(data) {
      if ("accessToken" in data && "refreshToken" in data) {
        alert("로그인 성공");
        navigate("/");

        return;
      }

      alert(data.message);
    },
  });

  return { login };
};
