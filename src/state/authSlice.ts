import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from ".";

export const TOKEN_TIME_OUT = 600 * 1000;

const initialState: IAuthState = {
  authenticated: false,
  email: "",
};

export const authSlice = createSlice({
  name: "authToken",
  initialState: initialState,
  reducers: {
    login: (state: IAuthState, action: PayloadAction<{ email: string }>) => {
      state.authenticated = true;
      state.email = action.payload.email ?? "";
    },
    logout: (state: IAuthState) => {
      state.authenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
