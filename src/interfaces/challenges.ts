import { CHALLENGE_CATEGORIES } from "src/data/challenge";

export interface IChallenge {
  id: string;
  title: string;
  category: string;
  count: number;
  gift80: number | null;
  gift90: number | null;
  gift100: number | null;
  duration: number;
  times: number;
  method: string;
  detail: string;
  notice: string;
  image: string;
  participants: string;
  status: string;
}

export type TChallengeListResponse = IChallenge[];

export type TChallengeCategory = typeof CHALLENGE_CATEGORIES[number];

export type TStampStatus = "NOTHING" | "SUCCESS" | "FAILURE" | "CHECKING" | "REVIVAL";

export interface IStamp {
  daycnt: number;
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
