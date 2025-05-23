import React, { JSX } from "react";
import { StyleSheet, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
//components
import SearchBarAndSettings from "@/components/home/SearchBarAndSettings";
import VideosCategories from "@/components/home/VideosCategories";
//styles
import { theme } from "@/constants/theme";

const Categories: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <SearchBarAndSettings />
      <VideosCategories
        sortBy="rating"
        query={"reactnative"}
        maxResults={10}
        title={"React Native"}
      />
      <VideosCategories
        sortBy="rating"
        query={"reactjs"}
        maxResults={10}
        title={"React"}
      />
      <VideosCategories
        sortBy="rating"
        query={"typescript"}
        maxResults={10}
        title={"TypeScript"}
      />
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
});
