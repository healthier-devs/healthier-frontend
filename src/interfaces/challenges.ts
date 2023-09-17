export interface IChallenge {
  id: string;
  name: string;
  duration: string;
  times: string;
  method: string;
  maximumGift: string;
}

export type TChallengeListResponse = {
  data: IChallenge[];
  total: number;
};

export interface TChallengeCategory {
  name: string;
  koreanName: string;
  imageUrl: string;
}

export type TChallengeCategoryListResponse = TChallengeCategory[];

export type TStampStatus = "NOTHING" | "SUCCESS" | "FAILURE" | "CHECKING" | "REVIVAL";

export interface IStamp {
  dayCnt: number;
  status: TStampStatus;
}

export interface IStampChartResponse {
  title: string;
  count: number;
  duration: string;
  times: string;
  method: string;
  revivalCnt: number;
  currentDayCnt: number;
  stamps: IStamp[];
}

export interface IStampBodyRequest {
  image: string;
  userId: string;
  challengeId: string;
  dayCount: number;
}
