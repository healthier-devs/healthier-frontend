import { useMutation } from "@tanstack/react-query";
import { challengeFetcher } from "src/api/challenge/fetcher";

interface IUseCreateStampChart {
  userId: string;
  challengeId: string;
}

export const useCreateStampChart = ({ userId, challengeId }: IUseCreateStampChart) => {
  const { mutate: createStampChart } = useMutation({
    mutationFn: () => challengeFetcher.createStampChart({ userId, challengeId }),
  });

  return { createStampChart };
};
