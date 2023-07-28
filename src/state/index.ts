import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { BodyPart } from "src/interfaces/symptomPage";
import { TAppDispatch, TRootState } from "./store";
import type { TDiagnoseCategory } from "src/interfaces/symptomPage";

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

////////////////////////////////
/// USER STATE RELATED TYPES ///
////////////////////////////////

export interface UserState {
  id: number;
  name: string;
  email: string;
  gender: string;
  birth_year: number;
  interests: number[];
  site: BodyPart[];
  age: number;
}

export interface fillInfoAction {
  gender: string;
  birth_year: number;
  interests: number[];
}

export interface AuthState {
  authenticated: boolean;
  accessToken: any;
  expireTime: any;
}

export interface IDiagnoseState {
  category: TDiagnoseCategory;
}
