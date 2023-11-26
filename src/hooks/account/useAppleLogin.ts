import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { accountFetcher } from "src/api/account/fetcher";
import { useAppDispatch } from "src/state";
import { login as loginAction } from "src/state/authSlice";
import { saveToken } from "src/utils/cookies";
import type { IAppleAuthorizationSuccess, IAppleAuthorizationError } from "src/interfaces/account";

export const useAppleLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  useEffect(() => {
    // @ts-ignore
    AppleID.auth.init({
      clientId: process.env.REACT_APP_APPLE_CLIENT_ID,
      scope: process.env.REACT_APP_APPLE_SCOPES,
      redirectURI: process.env.REACT_APP_APPLE_REDIRECT_URI,
      state: process.env.REACT_APP_APPLE_STATE,
      usePopup: false,
    });

    document.addEventListener("AppleIDSignInOnSuccess", async (event: any) => {
      const { code } = (event as IAppleAuthorizationSuccess).detail.authorization;

      const { hasAdditionalInformation, accessToken, refreshToken } = await accountFetcher.authorizeApple(code);

      alert("called2");
      if (hasAdditionalInformation) {
        navigate("/signup/step1?type=social");

        return;
      }

      saveToken({ accessToken, refreshToken });
      dispatch(loginAction());

      queryClient.clear();
      navigate("/");
    });

    document.addEventListener("AppleIDSignInOnFailure", (event: any) => {
      const { error } = (event as IAppleAuthorizationError).detail;

      if (error === "popup_closed_by_user") {
        return;
      }
      alert("문제가 발생했습니다. 처음부터 다시 시도해 주세요.");
    });
  }, [navigate, dispatch, queryClient]);
};
