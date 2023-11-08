import { LayerProps } from "lamina/types";
import { Abstract, LayerMaterial } from "lamina/vanilla";
import { Vector3 } from "three";

export interface IOverlayProps {
  view: ViewPoint;
  setView: (view: ViewPoint) => void;
  selection: BodyPart[];
  setSelection: (selection: BodyPart[]) => void;
}

export interface ICharacterProps {
  view: ViewPoint;
  selection: BodyPart[];
}

export interface IPointAbstract extends Abstract {
  origin: Vector3;
  near: number;
  far: number;
  colorA: string;
  colorB: string;
}

export interface IPointShader extends LayerMaterial {
  layers: IPointAbstract[];
}

export interface IPointLayerProps extends LayerProps {
  colorA: string;
  colorB: string;
  colorAalpha: number;
  colorBalpha: number;
  near: number;
  far: number;
  origin: number[];
}

export enum ViewPoint {
  FRONT = "FRONT",
  REAR = "REAR",
}

export enum BodyPart {
  NONE = "NONE",
  TEMPLE = "TEMPLE",
  FOREHEAD = "FOREHEAD",
  EYE = "EYE",
  NEAREYE = "NEAREYE",
  NEARNOSE = "NEARNOSE",
  CHIN = "CHIN",
  REARHEAD = "REARHEAD",
  HEAD = "HEAD",
  BACKNECK = "BACKNECK",
}

export type TSymptomType = {
  engName: string;
  korName: string;
};

export type TDiagnoseCategory =
  | "피부"
  //| "전신"
  | "머리"
  // | "정신"
  // | "코"
  | "목"
  //| "등/허리"
  //| "가슴"
  | "배";
//| "골반"
//| "팔다리";

//export type TDiagnoseCategory = "피부" | "배" | "r";

export type TDiagnoseType = {
  [key in TDiagnoseCategory]: {
    symptoms: TSymptomType[];
    imagePath: string;
  };
};
