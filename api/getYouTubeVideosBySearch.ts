import { searchMockup } from "@/constants/mockups";
import { API_KEY, YOU_TUBE_API_INSTANCE } from ".";
//types
import { ICommonResponse } from "@/types/api";
import { status } from "@/types/enums";
import { IVideo, IVideoResponse } from "@/types/videos";

export const getYouTubeVideosBySearch = (
  setResponse: React.Dispatch<
    React.SetStateAction<ICommonResponse<IVideo[] | null>>
  >,
  abortController: AbortController,
  sortBy: string,
  query: string,
  maxResults: number,
  setNextPageToken?: React.Dispatch<
    React.SetStateAction<IVideoResponse["nextPageToken"]>
  >
): void => {
  let orderBy;
  if (sortBy === "Most popular") {
    orderBy = "rating";
  } else if (sortBy === "Upload date: latest") {
    orderBy = "date";
  } else if (sortBy === "Upload date: oldest") {
    orderBy = "date";
  }

  YOU_TUBE_API_INSTANCE.get<IVideoResponse>(
    `/search?key=${API_KEY}&part=snippet&q=${query}&orderBy=${orderBy}&maxResults=${maxResults}`,
    {
      signal: abortController.signal,
    }
  )
    .then((response) => {
      if (setNextPageToken) {
        setNextPageToken(response.data.nextPageToken);
      }
      if (sortBy === "Upload date: oldest") {
        const oldest = [...response.data.items].sort(function (a, b) {
          return (
            new Date(a.snippet.publishTime).getTime() -
            new Date(b.snippet.publishTime).getTime()
          );
        });
        setResponse({
          status: status.RESOLVED,
          data: oldest,
        });
        return;
      }
      if (sortBy === "Upload date: latest") {
        const newest = [...response.data.items].sort(function (a, b) {
          return (
            new Date(b.snippet.publishTime).getTime() -
            new Date(a.snippet.publishTime).getTime()
          );
        });
        setResponse({
          status: status.RESOLVED,
          data: newest,
        });
        return;
      }
      setResponse({
        status: status.RESOLVED,
        data: response.data.items,
      });
    })
    .catch(() => {
      // setResponse(COMMON_ERROR_REPONSE);
      if (setNextPageToken) {
        setNextPageToken("CBQQAA");
      }
      if (sortBy === "Upload date: oldest") {
        const oldest = [...searchMockup.items].sort(function (a, b) {
          return (
            new Date(a.snippet.publishTime).getTime() -
            new Date(b.snippet.publishTime).getTime()
          );
        });
        setResponse({
          status: status.RESOLVED,
          data: oldest,
        });
        return;
      }
      if (sortBy === "Upload date: latest") {
        const newest = [...searchMockup.items].sort(function (a, b) {
          return (
            new Date(b.snippet.publishTime).getTime() -
            new Date(a.snippet.publishTime).getTime()
          );
        });
        setResponse({
          status: status.RESOLVED,
          data: newest,
        });
        return;
      }
      setResponse({
        status: status.RESOLVED,
        data: searchMockup.items,
      });
    });
};
