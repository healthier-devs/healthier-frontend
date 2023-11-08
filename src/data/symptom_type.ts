import type { TSymptomType, TDiagnoseType, TDiagnoseCategory } from "src/interfaces/symptomPage";

export const SKIN_SYMPTOMS: TSymptomType[] = [
  { engName: "RASH", korName: "피부발진" },
  { engName: "JAUNDICE", korName: "황달" },
];

export const WHOLE_BODY_SYMPTOMS: TSymptomType[] = [
  { engName: "FEVER", korName: "발열" },
  { engName: "BRUISE", korName: "멍듦" },
  { engName: "FATIGUE", korName: "피로" },
  { engName: "WEIGHTLOSS", korName: "체중 감소" },
  { engName: "WEIGHTGAIN", korName: "체중 증가/비만" },
];

export const HEAD_SYMPTOMS: TSymptomType[] = [
  { engName: "HEADACHE", korName: "두통" },
  { engName: "SYNCOPE", korName: "실신" },
  { engName: "DIZZINESS", korName: "어지러움" },
  { engName: "VOMIT", korName: "구토" },
  { engName: "SEIZURE", korName: "경련" },
  { engName: "CONSCIOUSNESS", korName: "의식 장애" },
];

export const MENTAL_SYMPTOMS: TSymptomType[] = [
  { engName: "MOODCHANGE", korName: "기분 변화" },
  { engName: "ANXIETY", korName: "불안" },
  { engName: "SLEEP", korName: "수면 장애" },
  { engName: "DEMENTIA", korName: "기억력 저하" },
];

export const NOSE_SYMPTOMS: TSymptomType[] = [{ engName: "RHINORRHEA", korName: "콧물/코막힘" }];

export const NECK_SYMPTOMS: TSymptomType[] = [
  { engName: "COUGH", korName: "기침" },
  { engName: "HEMATEMESIS", korName: "피를 토함" },
  { engName: "NECKPAIN", korName: "목 통증" },
];
export const BACK_SYMPTOMS: TSymptomType[] = [{ engName: "BACKPAIN", korName: "등/허리 통증" }];

export const CHEST_SYMPTOMS: TSymptomType[] = [
  { engName: "CHESTPAIN", korName: "가슴 통증" },
  { engName: "PALPITATION", korName: "두근거림" },
  { engName: "DYSPNEA", korName: "호흡곤란" },
  { engName: "BREASTPAIN", korName: "유방통" },
  { engName: "BREASTMASS", korName: "유방덩이" },
];

export const STOMACH_SYMPTOMS: TSymptomType[] = [
  { engName: "STOMACH", korName: "급성 복통" },
  { engName: "CONSTIPATION", korName: "배변이상/변비" },
  { engName: "DIARRHEA", korName: "배변이상/설사" },
  { engName: "INDIGESTION", korName: "소화 불량/만성 복통" },
  { engName: "HEMATEMESIS", korName: "토혈" },
  { engName: "BLOODYSTOOL", korName: "혈변" },
];

export const PELVIS_SYMPTOMS: TSymptomType[] = [
  {
    engName: "AMENORRHEA",
    korName: "월경 이상",
  },
  {
    engName: "DYSMENORRHEA",
    korName: "월경통",
  },
  {
    engName: "VBLEEDING",
    korName: "질출혈",
  },
  {
    engName: "DISCHARGE",
    korName: "질분비물",
  },

  {
    engName: "FUNDHIS",
    korName: "배뇨 이상",
  },
  {
    engName: "HEMATURIA",
    korName: "혈뇨",
  },
  {
    engName: "OLIGOURIA",
    korName: "핍뇨",
  },
  {
    engName: "POLYURIA",
    korName: "다뇨",
  },
];

export const ARM_LEG_SYMPTOMS: TSymptomType[] = [
  {
    engName: "SENSE",
    korName: "근력/감각 이상",
  },
  {
    engName: "ARTHALGIA",
    korName: "관절 통증",
  },
];

export const DIAGNOSE_TYPES: TDiagnoseType[] = [
  {
    category: "피부",
    symptoms: SKIN_SYMPTOMS,
  },
  {
    category: "전신",
    symptoms: WHOLE_BODY_SYMPTOMS,
  },
  {
    category: "머리",
    symptoms: HEAD_SYMPTOMS,
  },
  {
    category: "정신",
    symptoms: MENTAL_SYMPTOMS,
  },
  {
    category: "코",
    symptoms: NOSE_SYMPTOMS,
  },
  {
    category: "목",
    symptoms: NECK_SYMPTOMS,
  },
  {
    category: "등/허리",
    symptoms: BACK_SYMPTOMS,
  },
  {
    category: "가슴",
    symptoms: CHEST_SYMPTOMS,
  },
  {
    category: "배",
    symptoms: STOMACH_SYMPTOMS,
  },
  {
    category: "골반",
    symptoms: PELVIS_SYMPTOMS,
  },
  {
    category: "팔다리",
    symptoms: ARM_LEG_SYMPTOMS,
  },
];

export const DIAGNOSE_IMAGE_PATH: { [x in TDiagnoseCategory]: string } = {
  피부: "symptom/skin.png",
  전신: "symptom/whole_body.png",
  머리: "symptom/head.png",
  정신: "symptom/mental.png",
  코: "symptom/nose.png",
  목: "symptom/neck.png",
  "등/허리": "symptom/back.png",
  가슴: "symptom/chest.png",
  배: "symptom/stomach.png",
  골반: "symptom/pelvis.png",
  팔다리: "symptom/arm_leg.png",
};

export const DIAGNOSE_CATEGORIES: TDiagnoseCategory[] = DIAGNOSE_TYPES.map(({ category }) => category);
