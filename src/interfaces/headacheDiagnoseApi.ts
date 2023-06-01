export interface IHeadacheQuestion {
  id: number | string;
  question: string;
  type?: string;
  is_multiple: boolean;
  answers: {
    answer_id: number;
    answer: string;
  }[];
}

export interface IHeadacheAnswers {
  question_id: number | string;
  answer_id: number[];
}

export interface IHeadacheAnswer {
  question_id: number | string;
  answer_id: number;
}

export interface IPrimaryHeadacheAnswer {
  question_id: number | string;
  answer_id: number;
  unknown_emergency: number;
}

interface IHeadacheResult {
  result_id: number;
  result: string;
}

export interface IHeadacheQuestions {
  questions: IHeadacheQuestion[];
}

export interface IBasicAnswers {
  questions: IHeadacheAnswers[];
  pain_area: string[];
}

export interface ICaseQuestion {
  type: number;
  message: string;
  questions: IHeadacheQuestion[];
  result?: null | IHeadacheResult;
  is_chronic?: number;
  unknownEmergency?: number;
}

export interface IPrimaryAnswers {
  is_chronic: number;
  questions: IHeadacheAnswer[];
}

export type IPainArea = "관자놀이" | "이마의 띠" | "눈" | "눈주위" | "코주위" | "머리 전체" | "턱" | "뒷머리" | "뒷목" | "얼굴피부";

export interface IPainAreaRequest {
  pain_area: IPainArea;
}

export interface IResultResponse {
  result: IHeadacheResult;
}

export interface IResultCard {
  id: number;
  content: string;
  banner_illustration: string;
}

export interface IFinalResult {
  type: number;
  results: {
    most_likely: IResultCard | null;
    suspicious: IResultCard[] | null;
    likely: IResultCard[] | null;
    predicted: IResultCard[] | null;
  };
}

export interface IResultRequest {
  results: { result_id: number; result: string }[];
  tracks: { question_id: string | number; answer_id: number[] }[];
  interests: number[];
  birth_year: number;
  gender: string;
}
