import { Image } from "expo-image";
import React, { JSX } from "react";
import { StyleSheet, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
//components
import PoppinsMedium from "@/components/fonts/PoppinsMedium";
//styles
import { theme } from "@/constants/theme";
//types
import { IVideo } from "@/types/videos";

type Props = {
  video: IVideo;
};

const VideoTile: React.FC<Props> = ({ video }): JSX.Element => {
  return (
    <View>
      <Image source={video.snippet.thumbnails.high.url} style={styles.image} />
      <PoppinsMedium numberOfLines={2} styles={styles.description}>
        {video.snippet.description}
      </PoppinsMedium>
    </View>
  );
};

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
    fontSize: theme.fontSize.twelne,
    lineHeight: theme.fontSize.twelne,
    marginTop: moderateScale(5),
  },
});
