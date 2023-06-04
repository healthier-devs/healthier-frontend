import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "src/state";
import { IAnswer, IQuestion, TDiagnoseType, ITrackData } from "src/interfaces/diagnoseApi/diagnosis";
import { ANSWER_TYPE } from "src/data/answer_type";
import { diagnosisFetcher } from "src/api/diagnose/fetcher";
import { getNextQuestion } from "src/utils/diagnosisHook";

function useDiagnosis(state: TDiagnoseType) {
  const navigate = useNavigate();

  const { gender } = useAppSelector((appState) => appState.user);
  const [curQuestion, setCurQuestion] = useState<IQuestion>({
    id: 0,
    question: "",
    is_multiple: false,
    image_url: null,
    answer_type: ANSWER_TYPE.DEF,
    answers: null,
  });
  const [selectedAnswer, setSelectedAnswer] = useState([] as IAnswer[]);
  const [loading, setLoading] = useState(false);

  const questions = useRef<IQuestion[]>([]);
  const questionHistory = useRef<IQuestion[]>([]);
  const answers = useRef<ITrackData[]>([]);

  useEffect(() => {
    if (!state) navigate("/");

    const getFirstQuestion = async () => {
      const { question: diagnosisQuestions } = await diagnosisFetcher.getQuestions(state, gender);
      questions.current = diagnosisQuestions;

      setCurQuestion(diagnosisQuestions[0]);
    };

    getFirstQuestion();
  }, [navigate, gender, state]);

  const handleNext = () => {
    if (questionHistory.current === undefined || questions.current === undefined) {
      return;
    }

    answers.current = [...answers.current, { question_id: curQuestion.id, answer_id: selectedAnswer.map((ans) => ans.answer_id) }];

    questionHistory.current = [...questionHistory.current, curQuestion];

    const nextQuestion = getNextQuestion({
      selectedAnswer,
      curQuestion,
      questions: questions.current,
    });

    if (nextQuestion) {
      setCurQuestion(nextQuestion);
    }
    setSelectedAnswer([]);
  };

  const handleBack = () => {
    if (questionHistory.current === undefined || questions.current === undefined) {
      return;
    }

    if (questionHistory.current.length === 0) {
      navigate(-1);

      return;
    }

    const lastIdx = questionHistory.current.length - 1;

    setCurQuestion(questionHistory.current[lastIdx]);
    questionHistory.current = questionHistory.current.slice(0, lastIdx);
    answers.current = answers.current.slice(0, answers.current.length - 1);
  };

  return { loading, curQuestion, handleNext, handleBack, selectedAnswer, setSelectedAnswer };
}

export default useDiagnosis;
