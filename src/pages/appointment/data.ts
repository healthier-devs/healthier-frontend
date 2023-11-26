export const partList = [
  "내과",
  "신경과",
  "정신건강\n의학과",
  "외과",
  "정형외과",
  "신경외과",
  "흉부외과",
  "성형외과",
  "마취통증\n의학과",
  "산부인과",
  "소아청소년과",
  "안과",
  "이비인후과",
  "피부과",
  "비뇨의학과",
  "영상의학과",
  "재활의학과",
  "가정의학과",
  "치과",
] as const;

export type TEmergencyNightKey = "emergencyNight" | "nightService";
export const emergencyNightData: { key: TEmergencyNightKey; label: string }[] = [
  { key: "emergencyNight", label: "응급실운영" },
  { key: "nightService", label: "야간진료" },
];
