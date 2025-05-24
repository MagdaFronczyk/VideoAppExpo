import React, { JSX, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
//components
import PoppinsSemiBold from "@/components/_common/fonts/PoppinsSemiBold";
import Details from "./Details";
import Notes from "./Notes";
//styles
import { theme } from "@/constants/theme";
//types
import { IVideo } from "@/types/videos";

type Props = {
  video: IVideo;
};

const DetailsTab: React.FC<Props> = ({ video }): JSX.Element => {
  const [isNotesVisible, setIsNotesVisible] = useState(false);
  const [isDetailsVisible, setIsDetaisVisible] = useState(true);

  const toggleDetailsVisible = (): void => {
    setIsDetaisVisible(true);
    setIsNotesVisible(false);
  };

  const toggleCommentsVisible = (): void => {
    setIsDetaisVisible(false);
    setIsNotesVisible(true);
  };

  return (
    <>
      <View style={styles.detailsTabsContainer}>
        <Pressable onPress={toggleDetailsVisible}>
          <PoppinsSemiBold styles={styles.details}>Details</PoppinsSemiBold>
          <View
            style={[
              styles.detailsLine,
              {
                borderColor: isDetailsVisible
                  ? theme.color.darkBlue
                  : theme.color.lightGray,
              },
            ]}
          />
        </Pressable>
        <Pressable onPress={toggleCommentsVisible}>
          <PoppinsSemiBold styles={styles.details}>Notes</PoppinsSemiBold>
          <View
            style={[
              styles.detailsLine,
              {
                borderColor: isNotesVisible
                  ? theme.color.darkBlue
                  : theme.color.lightGray,
              },
            ]}
          />
        </Pressable>
      </View>
      <View style={styles.detailsContainer}>
        {isDetailsVisible ? <Details video={video} /> : <Notes />}
      </View>
    </>
  );
};

export default DetailsTab;

const styles = StyleSheet.create({
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
});
