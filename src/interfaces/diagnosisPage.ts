import { Dispatch } from "react";

export interface IQuestion {
  id: string | number;
  question: string;
  type?: string;
  answers: IAnswer[];
  is_multiple: number;
  is_last_default?: number;
}

export interface IAnswer {
  answer_id: number;
  answer: string;
  score?: number;
  is_decisive?: number;
}

export interface IAnswerButtonProps {
  question: IQuestion;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
  handleNext: () => void;
}

export interface IHeadacheResult {
  result_id: number;
  result: string;
}
