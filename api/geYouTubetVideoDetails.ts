import { API_KEY, COMMON_ERROR_REPONSE, YOU_TUBE_API_INSTANCE } from ".";
//types
import { ICommonResponse } from "@/types/api";
import { status } from "@/types/enums";
import { IVideoDetails, IVideoDetailsResponse } from "@/types/video";

export const getYouTubeVideoDetails = (
  setResponse: React.Dispatch<
    React.SetStateAction<ICommonResponse<IVideoDetails | null>>
  >,
  abortController: AbortController,
  videoId: string
): void => {
  YOU_TUBE_API_INSTANCE.get<IVideoDetailsResponse>(
    `/videos?key=${API_KEY}&part=snippet,statistics&id=${videoId}`,
    {
      signal: abortController.signal,
    }
  )
    .then((response) => {
      setResponse({
        status: status.RESOLVED,
        data: response.data.items[0],
      });
    })
    .catch((error) => {
      setResponse(COMMON_ERROR_REPONSE);
    });
};
