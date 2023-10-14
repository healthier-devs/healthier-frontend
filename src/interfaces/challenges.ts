export interface IChallenge {
  id: number;
  name: string;
  maximumGift: number;
  duration: number;
  times: number;
  method: string;
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

export interface IStampImagePresignedUrl {
  url: string;
}
