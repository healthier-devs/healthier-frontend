import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AnswerState {
  answers: { question_id: string; answer_id: number[] }[];
}

const initialState: AnswerState = {
  answers: [],
};

export const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    back: (state) => {
      state.answers.pop();
    },
    saveAnswer: (state, action: PayloadAction<{ question_id: string; answer_id: number[] }>) => {
      state.answers = [...state.answers.filter((answer) => answer.question_id !== action.payload.question_id), action.payload];
    },
    resetAnswer: (state) => {
      state.answers = new Array();
    },
  },
});

export const { back, saveAnswer, resetAnswer } = answerSlice.actions;

export default answerSlice.reducer;
