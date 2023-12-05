import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IChallengeState {
  challengeCategory: string;
}

const initialState: IChallengeState = {
  challengeCategory: "",
};

export const challengeSlice = createSlice({
  name: "challenge",
  initialState,
  reducers: {
    saveChallengeCategory: (state, action: PayloadAction<Pick<IChallengeState, "challengeCategory">>) => {
      state.challengeCategory = action.payload.challengeCategory;
    },
  },
});

export const { saveChallengeCategory } = challengeSlice.actions;
export default challengeSlice.reducer;
