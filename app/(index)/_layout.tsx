import React, { JSX } from "react";
import { Stack } from "expo-router";

const LogInLayout: React.FC = (): JSX.Element => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default LogInLayout;
