import { Stack } from "expo-router";
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

const RootLayout: React.FC = (): JSX.Element => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(index)" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RootLayout;
