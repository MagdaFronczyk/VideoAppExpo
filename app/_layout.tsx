import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { JSX } from "react";
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from "react-native-safe-area-context";

export const unstable_settings = {
  initialRouteName: "(index)",
};

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const RootLayout: React.FC = (): JSX.Element => {
  const [loaded] = useFonts({
    RobotoLight: require("../assets/fonts/Poppins-Bold.ttf"),
    RobotoRegular: require("../assets/fonts/Poppins-Medium.ttf"),
    RobotoMedium: require("../assets/fonts/Poppins-Regular.ttf"),
    RobotoBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  React.useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack
          screenOptions={{ headerShown: false }}
          initialRouteName="(index)"
        >
          <Stack.Screen name="(index)" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RootLayout;
