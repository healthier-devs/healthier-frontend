import { useQuery } from "@tanstack/react-query";
import { diagnosisFetcher } from "src/api/diagnose/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { IQuestionResponse } from "src/interfaces/diagnoseApi/diagnosis";
import type { TSymptomType } from "src/interfaces/symptomPage";

interface IUseGetQuestions {
  gender: string;
  state: string;
}

export const useGetQuestions = ({ gender, state }: IUseGetQuestions) => {
  const { data: questionsData, isLoading } = useQuery<IQuestionResponse>({
    queryKey: [queryKeys.DIAGNOSE, gender, state],
    queryFn: () => diagnosisFetcher.getQuestions(state, gender),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return {
    questionsData,
    isLoading,
  };
};
