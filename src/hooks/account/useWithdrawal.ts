import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { accountFetcher } from "src/api/account/fetcher";
import { useAppDispatch } from "src/state";
import { logout as logoutAction } from "src/state/authSlice";
import { removeToken } from "src/utils/cookies";
import type { IWithDrawlBody } from "src/interfaces/account";

export const useWithdrawal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { mutate: withdrawal } = useMutation({
    mutationFn: (body: IWithDrawlBody) => accountFetcher.postWithdrawal(body),
    onSuccess() {
      dispatch(logoutAction());
      removeToken();

      navigate("/account/signout/copmplete");
    },
  });

  return { withdrawal };
};
