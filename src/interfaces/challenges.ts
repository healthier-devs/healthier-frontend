export interface IChallenge {
  id: number;
  name: string;
  duration: string;
  times: string;
  method: string;
  maximumGift: number;
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

export interface IMyChallengeProgress {
  category: string;
  challengeId: string;
  challengeName: string;
  days: number;
  isStampForToday: boolean;
  remainDays: number;
}

export interface IMyChallengeProgressResponse {
  count: number;
  myChallenge: IMyChallengeProgress[];
}

export interface IMyChallengeFinish {
  challengeId: string;
  challengeName: string;
  achievement: number;
  category: string;
  isSuccess: boolean;
}

export interface IMyChallengeFinishResponse {
  count: number;
  myChallenge: IMyChallengeFinish[];
}

export interface IStamp {
  id: number;
  image: string | null;
  submitTime: string;
  status: TStampStatus;
}

export interface IStampChartResponse {
  title: string;
  count: number;
  duration: string;
  times: string;
  method: string;
  currentDayCnt: number;
  submissions: IStamp[];
}

export interface IStampBodyRequest {
  image: string;
  userId: string;
  challengeId: string;
  dayCount: number;
}
