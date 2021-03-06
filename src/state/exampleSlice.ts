import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ExampleState {
  value: number;
}

const initialState: ExampleState = {
  value: 0,
};

export const exampleSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = exampleSlice.actions;
export const selectCount = (state: RootState) => state.example.value;

export default exampleSlice.reducer;
