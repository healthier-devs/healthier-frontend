import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetKakaoAuth } from "src/hooks/account/useGetKakaoAuth";
import { removeToken, saveToken } from "src/utils/cookies";

const KakaoCallback = () => {
  const { isLoading, kakaoAuthData } = useGetKakaoAuth();
  const navigate = useNavigate();

  useEffect(() => {
    removeToken();
  }, []);

  useEffect(() => {
    if (!isLoading && kakaoAuthData) {
      if ("code" in kakaoAuthData && "message" in kakaoAuthData) {
        if (kakaoAuthData.message === "Withdrawal already processed.") {
          alert("탈퇴한 회원은 14일 이내에 가입이 불가능합니다");
        } else {
          alert("문제가 발생했습니다. 처음부터 다시 시도해 주세요.");
        }
        navigate("/onboard");

        return;
      }
      if (kakaoAuthData.alreadyRegistered) {
        // 이미 회원가입한 유저
        if (kakaoAuthData.registerType === "DEFAULT") {
          navigate("/login", {
            state: {
              type: kakaoAuthData.registerType,
            },
          });
        } else if (kakaoAuthData.registerType === "APPLE") {
          navigate("/login", {
            state: {
              type: kakaoAuthData.registerType,
            },
          });
        }
      } else {
        if (!kakaoAuthData.hasAdditionalInformation) {
          navigate("/signup/step1?type=kakao", {
            state: {
              accessToken: kakaoAuthData.accessToken,
              refreshToken: kakaoAuthData.refreshToken,
            },
          });

          return;
        }

        saveToken({
          accessToken: kakaoAuthData.accessToken,
          refreshToken: kakaoAuthData.refreshToken,
        });
        navigate("/");
      }
    }
  }, [isLoading]);

  return (
    <>
      <></>
      {/* Loader if needed */}
    </>
  );
};

export default KakaoCallback;
