import { useMutation } from "@tanstack/react-query";
import { validateToken as validateTokenAPI } from "src/api/account/service";
import { useAppDispatch } from "src/state";
import { login, logout } from "src/state/authSlice";

export const useValidateToken = () => {
  const dispatch = useAppDispatch();

  const { mutate: validateToken } = useMutation({
    mutationFn: () => validateTokenAPI(),
    onSuccess(data) {
      if ("message" in data && "code" in data) {
        dispatch(logout());

        return;
      }
      dispatch(
        login({
          email: null,
        })
      );
    },
  });

  return { validateToken };
};
