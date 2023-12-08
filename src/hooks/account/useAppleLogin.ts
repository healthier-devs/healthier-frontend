import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { accountFetcher } from "src/api/account/fetcher";
import { getAppleAuthData } from "src/api/account/service";
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
      const appleAuthData = await getAppleAuthData(code);

      if ("code" in appleAuthData && "message" in appleAuthData) {
        if (appleAuthData.message === "Withdrawal already processed.") {
          alert("탈퇴한 회원은 14일 이내에 가입이 불가능합니다");
        } else {
          alert("문제가 발생했습니다. 처음부터 다시 시도해 주세요.");
        }
        navigate("/onboard");

        return;
      }
      const { hasAdditionalInformation, alreadyRegistered, registerType, accessToken, refreshToken } = appleAuthData;

      if (alreadyRegistered) {
        navigate("/login", {
          state: {
            type: registerType,
          },
        });

        return;
      }

      if (!hasAdditionalInformation) {
        navigate("/signup/step1?type=social", {
          state: {
            accessToken,
            refreshToken,
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
