import { Dispatch } from "react";
import { IQuestion, IAnswer } from "src/interfaces/diagnoseApi/diagnosis";
import { ANSWER_TYPE } from "src/data/answer_type";
import DurationButton from "../durationButton";
import PreviousTimeButton from "../previousTimeButton";

interface INumberAnswerButtonProps {
  question: IQuestion;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
}

function NumberAnswerButton({ question, selectedAnswer, setSelectedAnswer }: INumberAnswerButtonProps) {
  if (question.answer_type === ANSWER_TYPE.NUMBER_1) {
    return <DurationButton question={question} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />;
  } else if (question.answer_type === ANSWER_TYPE.NUMBER_2) {
    return <PreviousTimeButton question={question} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />;
  }

  return <div>구현 필요</div>;
}

export default NumberAnswerButton;