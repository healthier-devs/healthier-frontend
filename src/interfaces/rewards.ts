export interface IRewards {
  rewardId: number;
  type: string;
  name: string;
  point: number;
  imageUrl: string;
  duration: number;
}

export type TRewardsResponse = IRewards[];

export interface IMyRewardRecords {
  challengeTitle: string;
  midtermReward: {
    userRewardId: number;
    point: number;
    rewardId: number;
    sent: boolean;
    selected: boolean;
  } | null;
  finalReward: {
    userRewardId: number;
    point: number;
    rewardId: number;
    sent: boolean;
    selected: boolean;
  } | null;
}

export type TMyRewardRecordsResponse = IMyRewardRecords[];
