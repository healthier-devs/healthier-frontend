import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { resetPassword as resetPasswordAPI } from "src/api/account/service";
import type { IResetPassword } from "src/interfaces/account";

interface IUserResetPassword {
  setValidation: React.Dispatch<
    React.SetStateAction<{
      isError: boolean;
      errorText: string;
    }>
  >;
}

export const useResetPassword = ({ setValidation }: IUserResetPassword) => {
  const navigate = useNavigate();

  const { mutate: resetPassword } = useMutation({
    mutationFn: (resetPasswordParam: IResetPassword) => resetPasswordAPI(resetPasswordParam),
    onSuccess(data) {
      if (data.success) {
        alert("비밀번호 변경이 완료되었습니다");
        navigate("/account");

        return;
      }
      setValidation({
        isError: true,
        errorText: data.data,
      });
    },
  });

  return {
    resetPassword,
  };
};
