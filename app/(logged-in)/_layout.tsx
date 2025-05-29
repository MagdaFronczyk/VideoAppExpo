import { Stack } from "expo-router";
import React, { JSX } from "react";

const LoggedInLayout: React.FC = (): JSX.Element => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(settings)" />
      <Stack.Screen name="(detailsModal)" options={{ presentation: "modal" }} />
    </Stack>
  );
};

export default LoggedInLayout;
