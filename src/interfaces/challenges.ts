import { CHALLENGE_CATEGORIES } from "src/data/challenge";

export interface IChallenge {
  id: number;
  title: string;
  category: string;
  count: number;
  midtermGift: number;
  finalGift: number;
  duration: number;
  times: number;
  method: string;
  notice: string;
  basicImage: string;
  whatContent: string;
  whyContent: string;
  tipSubtitle: string;
  tipContent: string;
  guide: string;
  status: string;
}

export type TChallengeListResponse = IChallenge[];

export type TChallengeCategory = typeof CHALLENGE_CATEGORIES[number];

export type TStampStatus = "NOTHING" | "SUCCESS" | "FAILURE" | "CHECKING" | "REVIVAL";

export interface IStamp {
  dayCnt: number;
  status: TStampStatus;
}

export interface IStampChartResponse {
  title: string;
  count: number;
  duration: number;
  times: number;
  method: string;
  revivalCnt: number;
  currentDayCnt: number;
  stamps: IStamp[];
}

export interface IStampChartRequest {
  userId: string;
  challengeId: string;
}
