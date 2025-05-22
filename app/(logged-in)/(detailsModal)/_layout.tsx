import { Stack } from "expo-router";
import React, { JSX } from "react";

const FilterLayout: React.FC = (): JSX.Element => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
};

export default FilterLayout;
