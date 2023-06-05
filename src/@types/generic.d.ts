import {
  IFreeLatestVideos,
  IFreeLatestVideosFields,
  IUpComingFights,
  IUpComingFightsFields,
} from "./contentful.d";
export type T = any;
export type LNG = { lng: string };
export type PAGE_PARAMS = {
  params: {
    lng: string;
  };
};

export type FreeLatestVideos = {
  sys: IFreeLatestVideos;
  feilds: Array<IFreeLatestVideosFields>;
};

export type UpComingFights = {
  sys: IUpComingFights;
  feilds: Array<IUpComingFightsFields>;
};
