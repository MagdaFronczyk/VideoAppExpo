import { ICommonResponse } from "@/types/api";
import { status } from "@/types/enums";
import { IVideo, IVideoResponse } from "@/types/videos";
import { API_KEY, COMMON_ERROR_REPONSE, YOU_TUBE_API_INSTANCE } from ".";

export const getYouTubeVideosBySearch = (
  setResponse: React.Dispatch<
    React.SetStateAction<ICommonResponse<IVideo[] | null>>
  >,
  setNextPageToken: React.Dispatch<
    React.SetStateAction<IVideoResponse["nextPageToken"]>
  >,
  abortController: AbortController,
  sortBy: string,
  query: string,
  maxResults: number
): void => {
  YOU_TUBE_API_INSTANCE.get<IVideoResponse>(
    `/search?key=${API_KEY}&part=snippet&q=${query}&orderBy=${sortBy}&maxResults=${maxResults}`,
    {
      signal: abortController.signal,
    }
  )
    .then((response) => {
      setNextPageToken(response.data.nextPageToken);
      setResponse({
        status: status.RESOLVED,
        data: response.data.items,
      });
    })
    .catch(() => {
      setResponse(COMMON_ERROR_REPONSE);
    });
};
