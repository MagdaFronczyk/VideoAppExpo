import BottomTabBars from "@/components/_common/navigation/BottomTabBars";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import React, { JSX } from "react";

const BOTTOM_TABS_DATA = [
  {
    name: "index",
    title: "Home",
  },
  {
    name: "search",
    title: "Search",
  },
];

const BottomTabsLayout: React.FC = (): JSX.Element => {
  const renderBottomBarComponent = (props: BottomTabBarProps): JSX.Element => {
    return <BottomTabBars {...props} />;
  };
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props: BottomTabBarProps) => renderBottomBarComponent(props)}
    >
      {BOTTOM_TABS_DATA.map((tab) => {
        return <Tabs.Screen key={tab.title} name={tab.name} />;
      })}
    </Tabs>
  );
};
export default BottomTabsLayout;
