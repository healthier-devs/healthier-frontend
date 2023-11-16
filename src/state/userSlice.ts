import { createSlice } from "@reduxjs/toolkit";
import { BodyPart } from "src/interfaces/symptomPage";
import { UserState, ISetNonmemberAction, IQRInfoAction } from "./index";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IUserInfo } from "src/interfaces/account";

const initialState: UserState = {
  name: "",
  email: "",
  gender: "",
  birth: {
    year: 0,
    month: 0,
    date: 0,
  },
  healthInterests: [],
  age: 0,

  site: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMemberInfo: (state, action: PayloadAction<IUserInfo>) => {
      state.name = action.payload.name;
      state.email = action.payload.username;
      state.gender = action.payload.gender;
      state.age = action.payload.age;
      state.healthInterests = [...action.payload.healthInterests];
    },
    setNonmemberInfo: (state, action: PayloadAction<ISetNonmemberAction>) => {
      state.gender = action.payload.gender;
      state.birth = action.payload.birth;
    },
    setSite: (state, action: PayloadAction<BodyPart[]>) => {
      state.site = action.payload;
    },
    setQRInformation: (state, action: PayloadAction<IQRInfoAction>) => {
      state.gender = action.payload.gender;
      state.name = action.payload.name;
      state.birth = action.payload.birth;
    },
    clearUserName: (state) => {
      state.name = "";
    },
  },
});

export const { setMemberInfo, setNonmemberInfo, setSite, setQRInformation, clearUserName } = userSlice.actions;
export default userSlice.reducer;
