import { useMutation } from "@tanstack/react-query";
import { validateToken as validateTokenAPI } from "src/api/account/service";
import { useAppDispatch } from "src/state";
import { login } from "src/state/authSlice";

export const useValidateToken = () => {
  const dispatch = useAppDispatch();

  const { mutate: validateToken } = useMutation({
    mutationFn: () => validateTokenAPI(),
    onSuccess() {
      dispatch(login());
    },
  });

  return { validateToken };
};
