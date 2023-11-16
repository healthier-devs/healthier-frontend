export interface IAnnouncementResponse {
  id: number;
  title: string;
  content?: string;
  createdAt: string;
  modifiedAt: string;
}
export interface IHealthInformation {
  drinkingAmount?: "마시지 않음" | "소주 3병 미만" | "소주 3-5병" | "소주 5병 이상";
  smokingAmount?: {
    smoking: boolean;
    years: number;
    timesPerDay: number;
  };
  underlyingDiseases?: string[];
  medicines?: string[];
  continuousMedicines?: string[];
  prevSurgery?: string[];
}

export interface IUseGetAnnouncements {
  pageInfo: {
    page: number;
    size: number;
  };
}
