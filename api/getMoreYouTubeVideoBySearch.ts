import { API_KEY, YOU_TUBE_API_INSTANCE } from ".";
//types
import { ICommonResponse } from "@/types/api";
import { status } from "@/types/enums";
import { IVideo, IVideoResponse } from "@/types/videos";
//constants
import { searchMockup } from "@/constants/mockups";

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
      // setResponse(COMMON_ERROR_REPONSE);
      setResponse({
        status: status.RESOLVED,
        data: searchMockup.items,
      });
    });
};
