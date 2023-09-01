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
