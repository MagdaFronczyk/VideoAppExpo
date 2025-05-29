/* eslint-disable react/display-name */
import { Image } from "expo-image";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
//components
import PoppinsMedium from "@/components/_common/fonts/PoppinsMedium";
//styles
import { theme } from "@/constants/theme";
//types
import { IVideo } from "@/types/videos";

const VideoTile = memo(
  ({ video }: { video: IVideo }) => (
    <View>
      <Image source={video.snippet.thumbnails.high.url} style={styles.image} />
      <PoppinsMedium numberOfLines={2} styles={styles.description}>
        {video.snippet.description}
      </PoppinsMedium>
    </View>
  ),
  (prevProps, nextProps) => {
    return (
      prevProps.video.snippet.thumbnails.high.url ===
        nextProps.video.snippet.thumbnails.high.url &&
      prevProps.video.snippet.description ===
        nextProps.video.snippet.description
    );
  }
);

export default VideoTile;

const styles = StyleSheet.create({
  image: {
    height: moderateScale(112),
    width: moderateScale(180),
    borderRadius: moderateScale(16),
    marginRight: moderateScale(24),
    marginTop: moderateScale(15),
  },
  description: {
    width: moderateScale(180),
    fontSize: theme.fontSize.twelve,
    lineHeight: theme.fontSize.twelve,
    marginTop: moderateScale(5),
  },
});
