import { Image } from "expo-image";
import { Link } from "expo-router";
import React, { JSX } from "react";
import { Pressable, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
//components
import PoppinsRegular from "@/components/_common/fonts/PoppinsRegular";
//styles
import { theme } from "@/constants/theme";

const searchIcon = require("../../assets/icons/search-icon.svg");

const SearchBarLink: React.FC = (): JSX.Element => {
  return (
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
          source={searchIcon}
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
  );
};

export default SearchBarLink;

const styles = StyleSheet.create({
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
