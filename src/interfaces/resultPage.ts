import { Dispatch } from "react";
import { TTreatmentType } from "src/components/treatmentTag";
import { IDDXResultResponse } from "./diagnoseApi/result";

export type TCoverPageData = Pick<
  IDDXResultResponse,
  "mainImg" | "typicalSymptom" | "name" | "necessaryMeasures" | "medicalDepartments" | "severity"
>;

export type TDefinitionData = Pick<IDDXResultResponse, "description" | "cause">;

export type TLifestyleData = Pick<IDDXResultResponse, "lifestyleHabits">;

export type TMedicinesData = Pick<IDDXResultResponse, "medicines">;

export type TExaminationTreatmentsData = Pick<IDDXResultResponse, "examinationTreatments">;

export interface IBottomNumber {
  curIndex: number;
  totalCount: number;
}

export interface IBottomBar extends IBottomNumber {
  openModal: () => void;
  setLoading: Dispatch<string>;
  isSaved: boolean;
  resultId: number;
}

export interface ICoverPageProps {
  illustration: string;
  highlight: string;
  title: string;
  description: string[];
  severity: number;
}

export interface IDefinePageProps {
  title: string;
  definition: string[];
  tag_flag: number;
  cause: { cause: string; details: string[] }[] | null;
  cause_detail: string[];
}

export interface ICauseBox {
  cause_1: {
    cause: string;
    details: string[];
  };
  cause_2: {
    cause: string;
    details: string[];
  };
}

export interface ILifeProps {
  title: string;
  detail: string;
  emoji: string;
}

export interface ILifeComponent {
  idx: number;
  icon: string;
  title: string;
  content: string;
}

export interface IMedicine {
  image: string;
  name: string;
  efficacy: string;
  dosage_and_uses?: { name: string; emoji: string }[];
  caution: { h1: string; h2: string; is_colored: string[] };
  sideeffects: { name: string; emoji: string }[];
}

export interface IMedicineProps {
  selected: number;
  setSelected: Dispatch<number>;
  medicine: IMedicine[];
}

export interface IMedicineDetail {
  selected: number;
  medicine: IMedicine[];
}

export interface IMedicineTag {
  tags: { name: string; emoji: string }[];
}

export interface ITreatPageProps {
  title: string;
  detail: string;
  type: TTreatmentType;
}

export interface ITreatBoxProps {
  title: string;
  description: string;
  type: TTreatmentType;
}
