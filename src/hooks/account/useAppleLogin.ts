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

  const handleAppleSignOnFailure = (event: any) => {
    const { error } = (event as IAppleAuthorizationError).error;

    if (error === "popup_closed_by_user") {
      return;
    }
    alert("문제가 발생했습니다. 처음부터 다시 시도해 주세요.");
  };

  const handleAppleSignInSuccess = (event: any) => {
    const verifyAppleAuthCode = async (code: string) => {
      const { hasAdditionalInformation, isAlreadyRegistered, registerType, accessToken, refreshToken } =
        await accountFetcher.authorizeApple(code);

      if (!hasAdditionalInformation) {
        navigate("/signup/step1?type=social", {
          state: {
            accessToken,
            refreshToken,
          },
        });

        return;
      }

      if (isAlreadyRegistered) {
        navigate("/login", {
          state: {
            type: registerType,
          },
        });

        return;
      }

      saveToken({ accessToken, refreshToken });
      dispatch(loginAction());

      queryClient.clear();
      navigate("/");
    };

    const { code } = (event as IAppleAuthorizationSuccess).authorization;

    verifyAppleAuthCode(code);
  };

  return { handleAppleSignInSuccess, handleAppleSignOnFailure };
};
