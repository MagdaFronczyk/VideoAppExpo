import { Image } from "expo-image";
import { Link } from "expo-router";
import React, { JSX } from "react";
import { Pressable, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const settingsIcon = require("../../assets/icons/settings-icon.svg");

const SettingsLink: React.FC = (): JSX.Element => {
  return (
    <Link
      href="../(settings)"
      asChild
      accessibilityLabel="Go to settings"
      accessibilityHint="Takes you to the settings screen"
      accessibilityRole="button"
    >
      <Pressable>
        <Image
          source={settingsIcon}
          style={styles.searchIcon}
          contentFit="cover"
          accessibilityLabel="Search icon"
          accessibilityHint="Icon for search"
        />
      </Pressable>
    </Link>
  );
};

export default SettingsLink;

const styles = StyleSheet.create({
  searchIcon: {
    height: moderateScale(24),
    width: moderateScale(24),
    marginLeft: moderateScale(12),
  },
});
