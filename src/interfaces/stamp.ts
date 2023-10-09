export interface IStampRevivalTicketCountResponse {
  revivalTicketNum: number;
}

export type TStampStatus = "NOTHING" | "SUCCESS" | "FAILURE" | "CHECKING" | "REVIVAL";

export interface IStamp {
  id: number;
  image: string | null;
  currentDays: number;
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
