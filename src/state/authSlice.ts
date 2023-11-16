import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from ".";

export const TOKEN_TIME_OUT = 600 * 1000;

const initialState: IAuthState = {
  authenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state: IAuthState) => {
      state.authenticated = true;
    },
    logout: (state: IAuthState) => {
      state.authenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
