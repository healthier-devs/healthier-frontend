export type TLocation = "MAIN_HOME";

export interface IAdvertisement {
  title: string;
  subtitle: string;
  image: string;
  location: TLocation;
}

export type TAdvertisementResponse = IAdvertisement[];
