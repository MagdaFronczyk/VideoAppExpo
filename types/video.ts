export interface IVideoDetailsResponse {
  kind: string;
  etag: string;
  items: IVideoDetails[];
  pageInfo: IPageInfo;
}

export interface IVideoDetails {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
}

export interface IThumbnails {
  default: IDefault;
  medium: IMedium;
  high: IHigh;
  standard: IStandard;
  maxres: IMaxres;
}

export interface IDefault {
  url: string;
  width: number;
  height: number;
}

export interface IMedium {
  url: string;
  width: number;
  height: number;
}

export interface IHigh {
  url: string;
  width: number;
  height: number;
}

export interface IStandard {
  url: string;
  width: number;
  height: number;
}

export interface IMaxres {
  url: string;
  width: number;
  height: number;
}

export interface ILocalized {
  title: string;
  description: string;
}

export interface IStatistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}
