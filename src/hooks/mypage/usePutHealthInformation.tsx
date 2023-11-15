import { useMutation } from "@tanstack/react-query";
import { mypageFetcher } from "src/api/mypage/fetcher";
import { IHealthInformation } from "src/interfaces/mypage";

export const usePutHealthInformation = (healthData: IHealthInformation) => {
  const { mutate: putHealthInformation } = useMutation({
    mutationFn: () => mypageFetcher.setHealthInformation(healthData),
  });

  return { putHealthInformation };
};
