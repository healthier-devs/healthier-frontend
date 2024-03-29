import { ISelectedAnswer, IQuestion } from "src/interfaces/diagnoseApi/diagnosis";

interface IGetNextQuestionParams {
  selectedAnswer: ISelectedAnswer;
  curQuestion: IQuestion;
  questions: IQuestion[];
}

export const getNextQuestion = ({ selectedAnswer, curQuestion, questions }: IGetNextQuestionParams): IQuestion | null => {
  const nextQuestionIdx = questions.findIndex((question) => question.id > curQuestion.id);

  if (nextQuestionIdx === questions.length) {
    return null;
  }

  return selectedAnswer.next_question ?? questions[nextQuestionIdx];
};

export const formatBirth = ({ year, month, date }: { year: number; month: number; date: number }): string => {
  const formattedMonth = month < 10 ? "0" + (month || 1) : month;
  const formattedDate = date < 10 ? "0" + (date || 1) : date;

  return `${year}-${formattedMonth}-${formattedDate}`;
};
