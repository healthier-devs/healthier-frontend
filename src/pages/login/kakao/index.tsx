import { useEffect } from "react";
import { useGetKakaoAuth } from "src/hooks/account/useGetKakaoAuth";

const KakaoCallback = () => {
  const { isLoading, kakaoAuthData } = useGetKakaoAuth();

  useEffect(() => {
    console.log(window.location.href.split("?code=")[1]);
    console.log(kakaoAuthData);
  }, [isLoading]);

  return (
    <>
      <></>
      {/* Loader if needed */}
    </>
  );
};

export default KakaoCallback;
