import { createSlice } from "@reduxjs/toolkit";
import { IDiagnoseState } from "./index";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IDiagnoseState = {
  category: "피부",
  hospitalId: "",
};

export const diagnoseSlice = createSlice({
  name: "diagnose",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Pick<IDiagnoseState, "category">>) => {
      state.category = action.payload.category;
    },
    setHospitalId: (state, action: PayloadAction<Pick<IDiagnoseState, "hospitalId">>) => {
      state.hospitalId = action.payload.hospitalId;
    },
    clearHospitalId: (state) => {
      state.hospitalId = "";
    },
  },
});

export const { setCategory, setHospitalId, clearHospitalId } = diagnoseSlice.actions;
export default diagnoseSlice.reducer;
