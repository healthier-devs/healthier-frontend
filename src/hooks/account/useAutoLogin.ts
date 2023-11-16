import { useEffect } from "react";
import { useAppDispatch } from "src/state";
import { login, logout } from "src/state/authSlice";
import { setMemberInfo } from "src/state/userSlice";
import { useUserData } from "./useUserData";

export const useAutoLogin = (accessToken: unknown) => {
  const { userData, isSuccess } = useUserData(accessToken ? true : false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      if ("message" in userData && "code" in userData) {
        dispatch(logout());

        return;
      }

      dispatch(login());
      dispatch(setMemberInfo(userData));
    }
  }, [userData, isSuccess, dispatch]);
};
