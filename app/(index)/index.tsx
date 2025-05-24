import { getAuth, signInAnonymously } from "@react-native-firebase/auth";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { JSX } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
//styles
import { theme } from "@/constants/theme";
//components
import PoppinsRegular from "@/components/_common/fonts/PoppinsRegular";
import PoppinsSemiBold from "@/components/_common/fonts/PoppinsSemiBold";

const logo = require("../../assets/images/logo.svg");
const appIcon = require("../../assets/icons/app-icon.svg");

const LogIn: React.FC = (): JSX.Element => {
  const router = useRouter();

  const handleLogIn = () => {
    signInAnonymously(getAuth())
      .then(() => {
        router.navigate("./(logged-in)");
      })
      .catch((error) => {
        if (error.code === "auth/operation-not-allowed") {
          console.log("Enable anonymous in your firebase console.");
        }

        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        accessibilityLabel="Logo"
        accessibilityHint="Application logo"
        source={logo}
        contentFit="cover"
        style={styles.logo}
      />
      <Image
        accessibilityLabel="Icon"
        accessibilityHint="Application icon"
        source={appIcon}
        contentFit="cover"
        style={styles.icon}
      />
      <View style={styles.innerContainer}>
        <PoppinsSemiBold
          styles={{
            fontSize: theme.fontSize.twentyTwo,
            color: theme.color.white,
          }}
        >
          Welcome to the best YouTube-based learning application.
        </PoppinsSemiBold>
        <Pressable
          onPress={handleLogIn}
          accessibilityLabel="Log in"
          accessibilityHint="Log in to your account"
          style={styles.loginButton}
        >
          <PoppinsSemiBold
            styles={{
              fontSize: theme.fontSize.sixteen,
              color: theme.color.white,
            }}
          >
            Log in as a guest
          </PoppinsSemiBold>
        </Pressable>
        <PoppinsRegular styles={styles.terms}>
          By continuing you agree with Terms and Conditions and Privacy Policy
        </PoppinsRegular>
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
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
