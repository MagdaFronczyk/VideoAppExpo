import React from "react";
import { StyleSheet, View } from "react-native";
import PoppinsRegular from "./fonts/PoppinsRegular";
//styles
import { theme } from "@/constants/theme";

const CommonError: React.FC = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <PoppinsRegular styles={styles.text}>
        Aplikacja napotkała problem
      </PoppinsRegular>
    </View>
  );
};

export default CommonError;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.color.darkBlue,
    fontSize: theme.fontSize.sixteen,
  },
});
