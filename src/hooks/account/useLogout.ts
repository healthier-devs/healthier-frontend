import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutAPI } from "src/api/account/service";
import { useAppDispatch } from "src/state";
import { logout as logoutAction } from "src/state/authSlice";
import { removeToken } from "src/utils/cookies";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout } = useMutation({
    mutationFn: () => logoutAPI(),
    onSuccess() {
      dispatch(logoutAction());
      removeToken();
      queryClient.clear();

      alert("로그아웃이 완료되었습니다.");

      navigate("/");
    },
  });

  return {
    logout,
  };
};
