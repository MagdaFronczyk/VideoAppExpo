import { useLocalSearchParams } from "expo-router";
import React, { JSX, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Video from "react-native-video";
//api
import { COMMON_INIT_RESPONSE } from "@/api";
import { getYouTubeVideoDetails } from "@/api/geYouTubetVideoDetails";
import { ICommonResponse } from "@/types/api";
//types
import { status } from "@/types/enums";
import { IVideo } from "@/types/videos";
//components
import CommonError from "@/components/_common/CommonError";
import CommonPending from "@/components/_common/CommonPending";
import PoppinsBold from "@/components/_common/fonts/PoppinsBold";
import PoppinsSemiBold from "@/components/_common/fonts/PoppinsSemiBold";
import { PersonIcon } from "@/components/_common/icons/PersonIcon";
import DetailsTab from "@/components/details/DetailsTab";
//styles
import { theme } from "@/constants/theme";

const movieUri =
  "https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

const DetailsModal: React.FC = (): JSX.Element => {
  const [videoResponse, setVideoResponse] =
    useState<ICommonResponse<IVideo[] | null>>(COMMON_INIT_RESPONSE);

  const { videoId } = useLocalSearchParams();

  // Ensure params are always strings
  const id = Array.isArray(videoId) ? videoId[0] : videoId;

  useEffect(() => {
    const abortController = new AbortController();
    getYouTubeVideoDetails(setVideoResponse, abortController, id);
    return () => {
      abortController.abort();
    };
  }, [id]);

  useEffect(() => {
    const abortController = new AbortController();
    let checkAgain: number;
    if (videoResponse.status === status.REJECTED) {
      checkAgain = setTimeout(() => {
        getYouTubeVideoDetails(setVideoResponse, abortController, id);
      }, 15000);
    }
    return () => {
      if (checkAgain) {
        clearTimeout(checkAgain);
        abortController.abort();
      }
    };
  }, [videoResponse.status, id]);

  if (videoResponse.status === status.PENDING) {
    return <CommonPending />;
  }

  if (videoResponse.status === status.REJECTED || !videoResponse.data) {
    return <CommonError />;
  }

  const video = videoResponse.data[6];

  return (
    <ScrollView style={styles.container}>
      <Video
        style={styles.video}
        source={{
          uri: movieUri,
        }}
      />
      <View style={styles.innerContainer}>
        <PoppinsSemiBold numberOfLines={1} styles={styles.title}>
          {video.snippet.title}
        </PoppinsSemiBold>
        <View style={styles.channelContainer}>
          <View style={styles.personIcon}>
            <PersonIcon />
          </View>
          <PoppinsBold styles={styles.channelTitle}>
            {video.snippet.channelTitle}
          </PoppinsBold>
        </View>
        <DetailsTab video={video} />
      </View>
    </ScrollView>
  );
};

export default DetailsModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.white,
    flex: 1,
  },
  video: {
    height: moderateScale(280),
    width: "100%",
  },
  title: {
    fontSize: theme.fontSize.eighteen,
    color: theme.color.darkBlue,
    marginHorizontal: moderateScale(20),
  },
  innerContainer: {
    paddingVertical: moderateScale(16),
  },
  personIcon: {
    height: moderateScale(48),
    width: moderateScale(48),
    backgroundColor: theme.color.darkBlue,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  channelContainer: {
    marginLeft: moderateScale(24),
    marginVertical: moderateScale(20),
    alignItems: "center",
    flexDirection: "row",
  },
  channelTitle: {
    fontSize: moderateScale(14),
    color: theme.color.darkBlue,
    marginLeft: moderateScale(10),
  },
  detailsTabsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  details: {
    fontSize: moderateScale(12),
    color: theme.color.darkBlue,
  },
  detailsLine: {
    borderWidth: moderateScale(2),
  },
  detailsContainer: {
    paddingHorizontal: moderateScale(16),
    marginTop: moderateScale(20),
  },
  descriptionTitle: {
    fontSize: theme.fontSize.ten,
    color: theme.color.darkBlue,
  },
  description: {
    marginTop: moderateScale(10),
    fontSize: theme.fontSize.twelve,
    color: theme.color.darkBlue,
  },
});
