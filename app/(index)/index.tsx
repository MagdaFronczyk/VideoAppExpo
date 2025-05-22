import { getAuth, signInAnonymously } from "@react-native-firebase/auth";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { JSX } from "react";
import { Pressable, View } from "react-native";
//styles
import { theme } from "@/constants/theme";
import { index as styles } from "./_styles";
//components
import PoppinsRegular from "@/components/fonts/PoppinsRegular";
import PoppinsSemiBold from "@/components/fonts/PoppinsSemiBold";
import { useFirebaseUser } from "@/hooks/useFirebaseUser";

const LogIn: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { user } = useFirebaseUser();

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
        source={require("../../assets/images/logo.svg")}
        contentFit="cover"
        style={styles.logo}
      />
      <Image
        accessibilityLabel="Icon"
        accessibilityHint="Application icon"
        source={require("../../assets/icons/app-icon.svg")}
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
