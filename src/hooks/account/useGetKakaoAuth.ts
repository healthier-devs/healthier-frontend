import { useQuery } from "@tanstack/react-query";
import { accountFetcher } from "src/api/account/fetcher";
import { queryKeys } from "src/api/queryKeys";

export const useGetKakaoAuth = () => {
  const { data: kakaoAuthData, isLoading } = useQuery({
    queryKey: ["kakaoAuth"],
    queryFn: () => {
      const url = new URL(window.location.href);

      if (url.searchParams.has("code")) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return accountFetcher.getKakaoAuth(url.searchParams.get("code")!);
      } else {
        return null;
      }
    },
  });

  return { kakaoAuthData, isLoading };
};
