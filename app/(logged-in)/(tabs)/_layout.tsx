import { Tabs } from "expo-router";
import React, { JSX } from "react";

const BOTTOM_TABS_DATA = [
  {
    name: "index",
    title: "Kategorie",
  },
  {
    name: "search",
    title: "Szukaj",
  },
];

const BottomTabsLayout: React.FC = (): JSX.Element => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {BOTTOM_TABS_DATA.map((tab) => {
        return <Tabs.Screen key={tab.title} name={tab.name} />;
      })}
    </Tabs>
  );
};
export default BottomTabsLayout;
