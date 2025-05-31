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
        const reversed = [...response.data.items].reverse();
        setResponse({
          status: status.RESOLVED,
          data: reversed,
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
      setResponse({
        status: status.RESOLVED,
        data: searchMockup.items,
      });
    });
};
