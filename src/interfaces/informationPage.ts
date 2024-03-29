import { Dispatch } from "react";

export interface IGenderProps {
  gender: string;
  setGender: (gender: string) => void;
}

export interface ITagsProps {
  interests: number[];
  setInterests: React.Dispatch<React.SetStateAction<number[]>>;
}

export interface ITag {
  id: number;
  name: string;
  selected: boolean;
}

export interface IYearPickerProps {
  year: number;
  setYear: (year: number) => void;
}

export interface IAgreement {
  member: boolean;
  information: boolean;
}

export interface IAgreementProps {
  agree: IAgreement;
  setAgree: Dispatch<IAgreement>;
  setAgreementDetail: Dispatch<number>;
}

export interface IAgreementHeader {
  text: string;
  callback: () => void;
}

export interface IAgreementComponentProps {
  agreementDetail: number;
  setAgreementDetail: Dispatch<number>;
}

export interface IBirth {
  year: number;
  month: number;
  date: number;
}
