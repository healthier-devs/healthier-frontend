import { useEffect } from "react";
import { getUserData } from "src/api/account/service";
import { useAppDispatch } from "src/state";
import { login, logout } from "src/state/authSlice";
import { setMemberInfo } from "src/state/userSlice";
import { removeToken } from "src/utils/cookies";

export const useAutoLogin = (accessToken: unknown) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    (async () => {
      const userData = await getUserData();

      if ("code" in userData && "message" in userData) {
        dispatch(logout());
        removeToken();

        return;
      }
      dispatch(login());
      dispatch(setMemberInfo(userData));
    })();
  }, [accessToken, dispatch]);
};
