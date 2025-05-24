import { API_KEY, COMMON_ERROR_REPONSE, YOU_TUBE_API_INSTANCE } from ".";
//types
import { ICommonResponse } from "@/types/api";
import { status } from "@/types/enums";
import { IVideo, IVideoResponse } from "@/types/videos";
//constants
import { searchMockup } from "@/constants/mockups";

export const getYouTubeVideoDetails = (
  setResponse: React.Dispatch<
    React.SetStateAction<ICommonResponse<IVideo[] | null>>
  >,
  abortController: AbortController,
  videoId: string
): void => {
  YOU_TUBE_API_INSTANCE.get<IVideoResponse>(
    `videos?key=${API_KEY}c&part=snippet,statistics&id=${videoId}`,
    {
      signal: abortController.signal,
    }
  )
    .then((response) => {
      // setResponse({
      //   status: status.RESOLVED,
      //   data: response.data.items,
      // });

      setResponse({
        status: status.RESOLVED,
        data: searchMockup.items,
      });
    })
    .catch(() => {
      setResponse(COMMON_ERROR_REPONSE);
    });
};
