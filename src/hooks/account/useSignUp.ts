import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup } from "src/api/account/service";
import type { ISignUpRequest } from "src/interfaces/account";

interface IUseSignUpProps {
  setValidation: React.Dispatch<
    React.SetStateAction<{
      isError: boolean;
      errorText: string;
    }>
  >;
}

export const useSignUp = ({ setValidation }: IUseSignUpProps) => {
  const navigate = useNavigate();

  const { mutate: signUp } = useMutation({
    mutationFn: (body: ISignUpRequest) => signup(body),
    onSuccess(data) {
      if (data.success) {
        navigate("/signup/complete");

        return;
      }

      setValidation({
        isError: true,
        errorText: data.data,
      });
    },
  });

  return { signUp };
};
