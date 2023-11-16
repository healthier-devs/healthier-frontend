import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { BodyPart } from "src/interfaces/symptomPage";
import { TAppDispatch, TRootState } from "./store";
import type { IBirth } from "src/interfaces/informationPage";
import type { TDiagnoseCategory } from "src/interfaces/symptomPage";

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

////////////////////////////////
/// USER STATE RELATED TYPES ///
////////////////////////////////

export interface UserState {
  name: string;
  email: string;
  gender: string;
  birth: IBirth;
  healthInterests: string[];
  age: number;

  site: BodyPart[];
}

export interface ISetNonmemberAction {
  gender: string;
  birth: IBirth;
}

export interface IAuthState {
  authenticated: boolean;
}

export interface IDiagnoseState {
  category: TDiagnoseCategory;
  hospitalId: string;
}

export interface IQRInfoAction {
  gender: "f" | "m";
  birth: IBirth;
  name: string;
}
