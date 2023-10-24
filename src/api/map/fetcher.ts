import { IUserMapResponse, IHospitalDetailInfo } from "src/interfaces/map";
import { createUnauthorizedFetcher } from "..";

const fetcher = createUnauthorizedFetcher("/map");

export interface IMapBoxRequest {
  userLongitude: string;
  userLatitude: string;
  leftLongitude: string;
  leftLatitude: string;
  rightLongitude: string;
  rightLatitude: string;
  emergencyNight: string;
  nightService: string;
  departments: string;
  isPharmacy: boolean;
  page: number;
  size: number;
}

export interface ISearchMapRequest {
  userLongitude: number;
  userLatitude: number;
  departments: string;
  nameContaining: string;
  page: number;
  size: number;
}

export const mapFetcher = {
  getUserMap(params: IMapBoxRequest): Promise<IUserMapResponse> {
    return fetcher.get(`/box`, params);
  },
  getMapDetail(id: string): Promise<IHospitalDetailInfo> {
    return fetcher.get(`/${id}`);
  },
  getSearchMap(params: ISearchMapRequest): Promise<IUserMapResponse> {
    return fetcher.get(`/search`, params);
  },
};
