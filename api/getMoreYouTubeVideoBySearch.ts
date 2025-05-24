import { API_KEY, COMMON_ERROR_REPONSE, YOU_TUBE_API_INSTANCE } from ".";
//types
import { ICommonResponse } from "@/types/api";
import { status } from "@/types/enums";
import { IVideo, IVideoResponse } from "@/types/videos";

export const getMoreYouTubeVideosBySearch = (
  setResponse: React.Dispatch<
    React.SetStateAction<ICommonResponse<IVideo[] | null>>
  >,
  abortController: AbortController,
  sortBy: string,
  query: string,
  maxResults: number,
  nextPageToken: string
): void => {
  YOU_TUBE_API_INSTANCE.get<IVideoResponse>(
    `/search?key=${API_KEY}&part=snippet&q=${query}&orderBy=${sortBy}&maxResults=${maxResults}&pageToken=${nextPageToken}`,
    {
      signal: abortController.signal,
    }
  )
    .then((response) => {
      setResponse({
        status: status.RESOLVED,
        data: response.data.items,
      });
    })
    .catch(() => {
      setResponse(COMMON_ERROR_REPONSE);
    });
};
