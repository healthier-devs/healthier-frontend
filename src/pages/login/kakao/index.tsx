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
      if (kakaoAuthData.alreadyRegistered) {
        // 이미 회원가입한 유저
        alert("이미 회원가입한 유저");
        if (kakaoAuthData.registerType === "DEFAULT") {
          alert("동일한 이메일으로 헬시어 서비스에 가입되어있습니다");
        } else if (kakaoAuthData.registerType === "APPLE") {
          alert("동일한 이메일으로 애플 서비스를 통해 헬시어 서비스에 가입되어있습니다");
        }
        navigate(-2);
      } else {
        saveToken({
          accessToken: kakaoAuthData.accessToken,
          refreshToken: kakaoAuthData.refreshToken,
        });
        navigate(-2);
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
