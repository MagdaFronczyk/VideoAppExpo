import React, { JSX } from "react";
import { StyleSheet, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
//components
import PoppinsMedium from "@/components/_common/fonts/PoppinsMedium";
import PoppinsSemiBold from "@/components/_common/fonts/PoppinsSemiBold";
//styles
import { theme } from "@/constants/theme";
//types
import { IVideo } from "@/types/videos";
import { ScreenIcon } from "../_common/icons/ScreenIcon";
import { ThumbIcon } from "../_common/icons/ThumbIcon";

type Props = {
  video: IVideo;
};

const Details: React.FC<Props> = ({ video }): JSX.Element => {
  return (
    <>
      <PoppinsSemiBold styles={styles.descriptionTitle}>
        Description
      </PoppinsSemiBold>
      <PoppinsMedium styles={styles.description}>
        {video.snippet.description}
      </PoppinsMedium>
      <PoppinsSemiBold styles={styles.statistics}>Statistics</PoppinsSemiBold>
      <View style={styles.statisticsContainer}>
        <View style={styles.innerContainer}>
          <ScreenIcon />
        </View>
        <View style={styles.innerContainer}>
          <ThumbIcon />
        </View>
      </View>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  descriptionTitle: {
    fontSize: theme.fontSize.ten,
    color: theme.color.darkBlue,
  },
  description: {
    marginTop: moderateScale(10),
    fontSize: theme.fontSize.twelve,
    color: theme.color.darkBlue,
  },
  statistics: {
    marginTop: moderateScale(10),
    fontSize: moderateScale(10),
    color: theme.color.darkBlue,
  },
  statisticsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: moderateScale(10),
  },
  innerContainer: {
    width: moderateScale(136),
    height: moderateScale(32),
    backgroundColor: theme.color.darkBlue,
    borderRadius: moderateScale(8),
    justifyContent: "center",
    paddingLeft: moderateScale(5),
  },
});
