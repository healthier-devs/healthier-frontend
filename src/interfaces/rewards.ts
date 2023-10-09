export interface IRewards {
  rewardId: number;
  displayName: string;
  point: number;
  imageUrl: string;
}

export type TRewardsResponse = IRewards[];

export interface IMyRewardRecords {
  userRewardId: number;
  challengeTitle: string;
  point: number;
  rewardId: number;
  sent: boolean;
  selected: boolean;
}

export type TMyRewardRecordsResponse = IMyRewardRecords[];
