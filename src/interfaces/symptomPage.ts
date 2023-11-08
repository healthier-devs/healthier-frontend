import { LayerProps } from "lamina/types";
import { Abstract, LayerMaterial } from "lamina/vanilla";
import { DIAGNOSE_TYPES } from "src/data/symptom_type";
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

// export type TSymptomType = typeof SYMPTOM_TYPES[number];
// export type TDentalSymptomType = typeof DENTAL_SYMPTOMS[number];
// type TDigestiveSymptomType = typeof DIGESTIVE_SYMPTOMS[number];

// 피부, 전신, 머리, 정신, 코, 목, 등/허리, 가슴, 배, 골반, 팔다리

type TDiagnoseTypeBase = {
  symptoms: TSymptomType[];
};
type TSkinDiagnoseType = {
  category: "피부";
} & TDiagnoseTypeBase;

type TWholeBodyDiagnoseType = { category: "전신" } & TDiagnoseTypeBase;
type THeadDiagnoseType = { category: "머리" } & TDiagnoseTypeBase;
type TMentalDiagnoseType = { category: "정신" } & TDiagnoseTypeBase;
type TNoseDiagnoseType = { category: "코" } & TDiagnoseTypeBase;
type TNeckDiagnoseType = { category: "목" } & TDiagnoseTypeBase;
type TBackDiagnosesType = { category: "등/허리" } & TDiagnoseTypeBase;
type TChestDiagnoseType = { category: "가슴" } & TDiagnoseTypeBase;
type TStomachDiagnosesType = { category: "배" } & TDiagnoseTypeBase;
type TPelvisDiagnoseType = { category: "골반" } & TDiagnoseTypeBase;
type TArmLegDiagnoseType = { category: "팔다리" } & TDiagnoseTypeBase;

export type TDiagnoseType =
  | TSkinDiagnoseType
  | TWholeBodyDiagnoseType
  | THeadDiagnoseType
  | TMentalDiagnoseType
  | TNoseDiagnoseType
  | TNeckDiagnoseType
  | TBackDiagnosesType
  | TChestDiagnoseType
  | TStomachDiagnosesType
  | TPelvisDiagnoseType
  | TArmLegDiagnoseType;

export type TSymptomType = {
  engName: string;
  korName: string;
};

export type TDiagnoseCategory = TDiagnoseType["category"];
