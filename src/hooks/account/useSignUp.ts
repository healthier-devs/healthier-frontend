import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup } from "src/api/account/service";
import type { ISignUpRequest } from "src/interfaces/account";

export const useSignUp = () => {
  const navigate = useNavigate();

  const { mutate: signUp } = useMutation({
    mutationFn: (body: ISignUpRequest) => signup(body),
    onSuccess(data) {
      if (data.success) {
        navigate("/signup/complete");

        return;
      }
    },
  });

  return { signUp };
};
