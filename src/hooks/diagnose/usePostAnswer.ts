import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { diagnosisFetcher } from "src/api/diagnose/fetcher";
import { useAppSelector } from "src/state";
import { useAppDispatch } from "src/state";
import { clearHospitalId } from "src/state/diagnoseSlice";
import { usePostSoap } from "./usePostSoap";
import type { IPostAnswersBody } from "src/interfaces/diagnoseApi/diagnosis";

interface IUsePostAnswer extends IPostAnswersBody {
  diagnoseType: string;
}

export const usePostAnswer = ({ diagnoseType, user, answers }: IUsePostAnswer) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { hospitalId } = useAppSelector((appState) => appState.diagnose);
  const { authenticated } = useAppSelector((appState) => appState.auth);

  const { postSoap } = usePostSoap({ hospitalId });

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
      if (hospitalId) {
        postSoap({ userId: data.user_id });
        navigate("/qr/complete");
      } else {
        navigate("/result-list", {
          state: data.diagnosis,
        });
      }
    },
    onError() {
      if (hospitalId) {
        dispatch(clearHospitalId());
      }
    },
    mutationKey: [hospitalId],
  });

  return { postAnswer, isPending };
};
