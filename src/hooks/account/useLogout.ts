import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutAPI } from "src/api/account/service";
import { useAppDispatch } from "src/state";
import { logout as logoutAction } from "src/state/authSlice";
import { removeCookie } from "src/utils/cookies";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { mutate: logout } = useMutation({
    mutationFn: () => logoutAPI(),
    onSuccess() {
      alert("로그아웃이 완료되었습니다.");
      removeCookie("accessToken");
      removeCookie("refreshToken");
      dispatch(logoutAction());

      navigate("/");
    },
  });

  return {
    logout,
  };
};
