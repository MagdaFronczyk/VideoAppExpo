import React, { JSX } from "react";
import { FlatList } from "react-native";
//types
import { ICommonResponse } from "@/types/api";
import { status } from "@/types/enums";
import { IVideo } from "@/types/videos";
//components
import CommonError from "../_common/CommonError";
import CommonPending from "../_common/CommonPending";
import VideoTile from "./VideoTile";

type Props = {
  videosResponse: ICommonResponse<IVideo[] | null>;
  searchText: string;
};

const SearchResults: React.FC<Props> = ({
  videosResponse,
  searchText,
}): JSX.Element => {
  const keyExtractor = (item: IVideo): string => {
    return `${item.id.videoId}`;
  };

  const renderItem = ({ item }: { item: IVideo }): JSX.Element => {
    return <VideoTile video={item} />;
  };

  if (searchText && videosResponse.status === status.PENDING) {
    return <CommonPending />;
  }

  if (videosResponse.status === status.REJECTED) {
    return <CommonError />;
  }

  return (
    <FlatList
      data={videosResponse && videosResponse.data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default SearchResults;
