import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { diagnosisFetcher } from "src/api/diagnose/fetcher";
import { useAppSelector } from "src/state";
import type { IPostAnswersBody } from "src/interfaces/diagnoseApi/diagnosis";

interface IUsePostAnswer extends IPostAnswersBody {
  diagnoseType: string;
}

export const usePostAnswer = ({ diagnoseType, user, answers }: IUsePostAnswer) => {
  const navigate = useNavigate();

  const { authenticated } = useAppSelector((appState) => appState.auth);

  const { mutate: postAnswer, isPending } = useMutation({
    mutationFn: () =>
      diagnosisFetcher.postAnswers({
        diagnosisType: diagnoseType,
        postAnswersBody: {
          user,
          answers,
        },
        authenticated,
      }),
    onSuccess(data) {
      if (data.unknown_cause) {
        navigate("/result", {
          state: {
            dx_id: data.dx_id,
          },
        });
      }
      navigate("/result-list", {
        state: data.diagnosis,
      });
    },
  });

  return { postAnswer, isPending };
};
