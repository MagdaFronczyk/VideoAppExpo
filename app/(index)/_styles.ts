import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
//styles
import { theme } from "@/constants/theme";

const index = StyleSheet.create({
  container: {
    backgroundColor: theme.color.gray,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  logo: {
    width: moderateScale(292),
    height: moderateScale(116),
  },
  icon: { width: moderateScale(128), height: moderateScale(128) },
  innerContainer: { paddingHorizontal: moderateScale(32) },
  loginButton: {
    backgroundColor: theme.color.darkBlue,
    padding: moderateScale(12),
    borderRadius: moderateScale(12),
    alignItems: "center",
    marginTop: moderateScale(20),
  },
  terms: {
    paddingHorizontal: moderateScale(32),
    marginTop: moderateScale(10),
    textAlign: "center",
    fontSize: theme.fontSize.thirteen,
    color: theme.color.darkBlue,
  },
});

export { index };
