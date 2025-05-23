import { Image } from "expo-image";
import { Link } from "expo-router";
import React, { JSX } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
//components
import PoppinsRegular from "@/components/fonts/PoppinsRegular";
//styles
import { theme } from "@/constants/theme";

const SearchBarAndSettings: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Link
        href="/search"
        asChild
        accessibilityLabel="Go to search"
        accessibilityHint="Takes you to the search screen"
        accessibilityRole="button"
        style={styles.searchBar}
      >
        <Pressable style={styles.pressableSearchBar}>
          <Image
            source={require("../../assets/icons/search-icon.svg")}
            style={styles.searchIcon}
            contentFit="cover"
            accessibilityLabel="Search icon"
            accessibilityHint="Icon for search"
          />
          <PoppinsRegular styles={styles.searchText}>
            Search videos
          </PoppinsRegular>
        </Pressable>
      </Link>
      <Link
        href="../(settings)"
        asChild
        accessibilityLabel="Go to settings"
        accessibilityHint="Takes you to the settings screen"
        accessibilityRole="button"
      >
        <Pressable>
          <Image
            source={require("../../assets/icons/settings-icon.svg")}
            style={styles.searchIcon}
            contentFit="cover"
            accessibilityLabel="Search icon"
            accessibilityHint="Icon for search"
          />
        </Pressable>
      </Link>
    </View>
  );
};

export default SearchBarAndSettings;

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  searchBar: {
    width: moderateScale(297),
    height: moderateScale(44),
    borderRadius: moderateScale(16),
    borderWidth: moderateScale(2),
    borderColor: theme.color.darkBlue,

    justifyContent: "center",
  },
  searchIcon: {
    height: moderateScale(24),
    width: moderateScale(24),
    marginLeft: moderateScale(12),
  },
  pressableSearchBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
  },
  searchText: {
    color: theme.color.darkBlue,
    opacity: 0.6,
    marginLeft: moderateScale(10),
  },
  settingLogo: {
    width: moderateScale(32),
    height: moderateScale(32),
  },
});
