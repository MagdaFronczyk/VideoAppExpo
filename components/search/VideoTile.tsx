/* eslint-disable react/display-name */
import dayjs from "dayjs";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React, { memo } from "react";
import { Pressable, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
//constants
import { theme } from "@/constants/theme";
//types
import { IVideo } from "@/types/videos";
//components
import PoppinsBold from "../_common/fonts/PoppinsBold";
import PoppinsRegular from "../_common/fonts/PoppinsRegular";

const VideoTile = memo(
  ({ video }: { video: IVideo }) => (
    <Link
      href={{
        pathname: "../../(detailsModal)/detailsModal",
        params: { videoId: video.id.videoId },
      }}
      asChild
      accessibilityLabel="Go to details"
      accessibilityHint="Takes you to the details screen"
      accessibilityRole="button"
      style={styles.container}
    >
      <Pressable>
        <Image
          source={video.snippet.thumbnails.high.url}
          style={styles.image}
        />
        <PoppinsBold styles={styles.channelTitle}>
          {video.snippet.channelTitle}
        </PoppinsBold>
        {video.snippet.description && (
          <PoppinsRegular styles={styles.description} numberOfLines={2}>
            {video.snippet.description}
          </PoppinsRegular>
        )}
        <PoppinsRegular styles={styles.publishTime}>
          {dayjs(video.snippet.publishedAt).format("DD.MM.YYYY")}
        </PoppinsRegular>
      </Pressable>
    </Link>
  ),
  (prevProps, nextProps) => {
    return (
      prevProps.video.id.videoId === nextProps.video.id.videoId &&
      prevProps.video.snippet.thumbnails.high.url ===
        nextProps.video.snippet.thumbnails.high.url &&
      prevProps.video.snippet.channelTitle ===
        nextProps.video.snippet.channelTitle &&
      prevProps.video.snippet.description ===
        nextProps.video.snippet.description &&
      prevProps.video.snippet.publishedAt ===
        nextProps.video.snippet.publishedAt
    );
  }
);

export default VideoTile;

const styles = StyleSheet.create({
  container: { flex: 1, marginBottom: moderateScale(20) },
  image: {
    width: moderateScale(345),
    height: moderateScale(200),
    borderRadius: moderateScale(16),
  },
  channelTitle: {
    fontSize: theme.fontSize.twelve,
    color: theme.color.darkBlue,
    marginTop: moderateScale(12),
  },
  description: {
    fontSize: theme.fontSize.fifteen,
    color: theme.color.darkBlue,
    marginTop: moderateScale(12),
    marginBottom: moderateScale(12),
  },
  publishTime: {
    fontSize: theme.fontSize.ten,
    color: theme.color.darkBlue,
    marginLeft: "auto",
  },
});
