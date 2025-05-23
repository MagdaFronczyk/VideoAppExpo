import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
//styles
import { theme } from "@/constants/theme";

const CommonPending: React.FC = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.color.darkBlue} size="large" />
    </View>
  );
};

export default CommonPending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
