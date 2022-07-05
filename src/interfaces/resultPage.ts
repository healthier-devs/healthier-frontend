export interface ICoverPageProps {
  illustration: string;
  highlight: string;
  title: string;
  description: string;
  severity: number;
}

export interface IDefinePageProps {
  title: string;
  definition: string;
  cause: { cause: string; details: string[] }[];
  cause_detail: string;
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

export interface IMedicine {
  name: string;
  efficacy: string;
  caution: { h1: string; h2: string; is_colored: string[] };
  n_sideeffects: number;
  sideeffects: { name: string; emoji: string }[];
}

export interface IMedicineDetail {
  selected: number;
  medicine: IMedicine[];
}

export interface ITreatPageProps {
  title: string;
  detail: string;
}