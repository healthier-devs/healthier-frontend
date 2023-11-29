import { useQuery } from "@tanstack/react-query";
import { getKakaoAuthData } from "src/api/account/service";

export const useGetKakaoAuth = () => {
  const { data: kakaoAuthData, isLoading } = useQuery({
    queryKey: ["kakaoAuth"],
    queryFn: () => {
      const url = new URL(window.location.href);

      if (url.searchParams.has("code")) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return getKakaoAuthData();
      } else {
        return null;
      }
    },
  });

  return { kakaoAuthData, isLoading };
};
