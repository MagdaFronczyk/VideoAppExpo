import { Link } from "expo-router";
import React, { JSX, useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
//components
import CommonError from "../_common/CommonError";
import CommonPending from "../_common/CommonPending";
import PoppinsRegular from "../fonts/PoppinsRegular";
import PoppinsSemiBold from "../fonts/PoppinsSemiBold";
import VideoTile from "./VideoTile";
//types
import { ICommonResponse } from "@/types/api";
import { status } from "@/types/enums";
import { IVideo, IVideoResponse } from "@/types/videos";
//styles
import { theme } from "@/constants/theme";
//api
import { COMMON_INIT_RESPONSE } from "@/api";
import { getYouTubeVideosBySearch } from "@/api/getYouTubeVideosBySearch";

type Props = {
  sortBy: string;
  query: string;
  maxResults: number;
  title: string;
};

const SearchResults: React.FC<Props> = ({
  sortBy,
  query,
  maxResults,
  title,
}): JSX.Element => {
  const [videosResponse, setVideosResponse] =
    useState<ICommonResponse<IVideo[] | null>>(COMMON_INIT_RESPONSE);
  const [nextPageToken, setNextPageToken] =
    useState<IVideoResponse["nextPageToken"]>("");

  useEffect(() => {
    const abortController = new AbortController();
    getYouTubeVideosBySearch(
      setVideosResponse,
      abortController,
      sortBy,
      query,
      maxResults,
      setNextPageToken
    );
    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    let checkAgain: number;
    if (videosResponse.status === status.REJECTED) {
      checkAgain = setTimeout(() => {
        getYouTubeVideosBySearch(
          setVideosResponse,
          abortController,
          sortBy,
          query,
          maxResults,
          setNextPageToken
        );
      }, 15000);
    }
    return () => {
      if (checkAgain) {
        clearTimeout(checkAgain);
        abortController.abort();
      }
    };
  }, [videosResponse.status]);

  const keyExtractor = (item: IVideo): string => {
    return `${item.id.videoId}`;
  };

  const renderItem = ({ item }: { item: IVideo }): JSX.Element => {
    return <VideoTile video={item} />;
  };

  if (videosResponse.status === status.PENDING) {
    return <CommonPending />;
  }

  if (videosResponse.status === status.REJECTED) {
    return <CommonError />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <PoppinsSemiBold>{title}</PoppinsSemiBold>
        <Link
          href={{
            pathname: "/search",
            params: {
              sortBy: sortBy,
              query: query,
              maxResults: maxResults,
              nextPageToken: nextPageToken,
            },
          }}
          asChild
          accessibilityLabel="Go to more search results of the category"
          accessibilityHint="Takes you to the more search results of the category on search screen"
          accessibilityRole="button"
        >
          <Pressable>
            <PoppinsRegular styles={styles.showMore}>Show more</PoppinsRegular>
          </Pressable>
        </Link>
      </View>
      <FlatList
        data={videosResponse.data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    marginTop: moderateScale(10),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: theme.fontSize.eighteen,
    color: theme.color.darkBlue,
  },
  showMore: {
    fontSize: theme.fontSize.twelve,
    color: theme.color.darkBlue,
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    paddingRight: moderateScale(24),
  },
});
