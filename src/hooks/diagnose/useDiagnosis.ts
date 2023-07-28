import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { INITIAL_QUESTION, INITIAL_ANSWER } from "src/data/answer_type";
import { IAnswer, ISelectedAnswer, IQuestion } from "src/interfaces/diagnoseApi/diagnosis";
import { useAppSelector } from "src/state";
import { getNextQuestion } from "src/utils/diagnosisHook";
import { useGetQuestions } from "./useGetQuestions";
import { usePostAnswer } from "./usePostAnswer";
import type { TSymptomType } from "src/interfaces/symptomPage";

function useDiagnosis(state: TSymptomType) {
  const navigate = useNavigate();
  const { gender, name, birth_year } = useAppSelector((appState) => appState.user);

  const [curQuestion, setCurQuestion] = useState<IQuestion | null>(INITIAL_QUESTION);
  const [selectedAnswer, setSelectedAnswer] = useState<ISelectedAnswer>(INITIAL_ANSWER);

  const questions = useRef<IQuestion[]>([]);
  const questionHistory = useRef<IQuestion[]>([]);
  const answers = useRef<IAnswer[]>([]);

  const { questionsData, isLoading } = useGetQuestions({ gender, state });
  const { postAnswer, isPending } = usePostAnswer({
    diagnoseType: state,
    user: { name, gender, birth_date: `${birth_year}-01-01` },
    answers: answers.current,
  });

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);

  useEffect(() => {
    if (!questionsData) {
      return;
    }

    questions.current = questionsData.question;
    setCurQuestion(questionsData.question[0]);
  }, [questionsData]);

  const handleNext = () => {
    if (curQuestion === null) {
      return;
    }

    answers.current = [
      ...answers.current,
      { question_id: curQuestion.id, answer_type: curQuestion.answer_type, answer_id: selectedAnswer.answer_id },
    ];

    const nextQuestion = getNextQuestion({
      selectedAnswer,
      curQuestion,
      questions: questions.current,
    });

    if (!nextQuestion) {
      setCurQuestion(null);
      postAnswer();

      return;
    }

    questionHistory.current = [...questionHistory.current, curQuestion];

    setCurQuestion(nextQuestion);
    setSelectedAnswer({
      answer_id: [],
      next_question: null,
    });
  };

  const handleBack = () => {
    if (questionHistory.current.length === 0) {
      navigate(-1);

      return;
    }

    const historyLastIdx = questionHistory.current.length - 1;
    const answersLastIdx = answers.current.length - 1;

    setCurQuestion(questionHistory.current[historyLastIdx]);
    setSelectedAnswer({
      answer_id: [],
      next_question: null,
    });

    questionHistory.current = questionHistory.current.slice(0, historyLastIdx);
    answers.current = answers.current.slice(0, answersLastIdx);
  };

  return {
    isLoading: isLoading || isPending,
    curQuestion: curQuestion ?? INITIAL_QUESTION,
    handleNext,
    handleBack,
    selectedAnswer,
    setSelectedAnswer,
  };
}

export default useDiagnosis;
