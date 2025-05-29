import React, { JSX } from "react";
import { StyleSheet, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
//components
import SearchBarLink from "@/components/home/SearchBarLink";
import SearchResults from "@/components/home/SearchResults";
//styles
import SettingsLink from "@/components/home/SettingsLink";
import { theme } from "@/constants/theme";

const videosCategories = [
  { query: "reactnative", title: "React Native" },
  { query: "reactjs", title: "React" },
  { query: "typescript", title: "Typescript" },
];

const Categories: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.linksContainer}>
        <SearchBarLink />
        <SettingsLink />
      </View>
      {videosCategories.map((category) => {
        return (
          <SearchResults
            key={category.title}
            sortBy="rating"
            query={category.query}
            maxResults={10}
            title={category.title}
          />
        );
      })}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: moderateScale(24),
    backgroundColor: theme.color.white,
    paddingTop: moderateScale(10),
  },
  linksContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
