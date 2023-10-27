import { useMutation } from "@tanstack/react-query";
import { challengeFetcher } from "src/api/challenge/fetcher";

interface IUsePostChallengeJoin {
  challengeId: number;
}

export const usePostChallengeJoin = ({ challengeId }: IUsePostChallengeJoin) => {
  const { mutate: postChallengeJoin } = useMutation({
    mutationFn: ({ isToday }: { isToday: number }) => challengeFetcher.postChallengeJoin({ challengeId, isToday }),
  });

  return { postChallengeJoin };
};
