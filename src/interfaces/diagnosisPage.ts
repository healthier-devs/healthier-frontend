import { Dispatch } from "react";

export interface IQuestion {
  id: string;
  question: string;
  answers: IAnswer[];
  is_multiple: number;
}

export interface IAnswer {
  answer_id: number;
  answer: string;
  score?: number;
  is_decisive: number;
}

export interface IAnswerButtonProps {
  question: IQuestion;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
  handleNext: () => void;
}
