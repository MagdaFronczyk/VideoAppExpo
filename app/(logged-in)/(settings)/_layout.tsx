import { Stack } from "expo-router";
import React, { JSX } from "react";

const SettingsLayout: React.FC = (): JSX.Element => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="settings" />
    </Stack>
  );
};

export default SettingsLayout;
