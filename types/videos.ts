export interface IVideoResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: IPageInfo;
  items: IVideo[];
}

interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface IVideo {
  kind: string;
  etag: string;
  id: IId;
  snippet: ISnippet;
}
interface IId {
  kind: string;
  videoId: string;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface IThumbnails {
  default: IDefault;
  medium: IMedium;
  high: IHigh;
}

interface IDefault {
  url: string;
  width: number;
  height: number;
}

interface IMedium {
  url: string;
  width: number;
  height: number;
}

interface IHigh {
  url: string;
  width: number;
  height: number;
}
