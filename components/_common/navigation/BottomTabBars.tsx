import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
//constants
import { BOTTOM_TAB_HEIGHT } from "../../../constants/navigation";
//styles
import { theme } from "../../../constants/theme";
//components
import BottomNavigationIconSwitcher from "@/utils/BottomNavigationIconSwitcher";
import BottomNavigationNameSwitcher from "@/utils/bottomNavigationNameSwitcher";
import PoppinsMedium from "../fonts/PoppinsMedium";


const BottomTabBars: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}): React.JSX.Element => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options }: { options: BottomTabNavigationOptions } =
          descriptors[route.key];

        const label =
          options.tabBarLabel?.toString() ?? options.title ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <View
            key={index}
            style={{
              ...styles.buttonContentWrapper,
              height: BOTTOM_TAB_HEIGHT,
            }}
          >
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              accessibilityHint={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={index}
              style={styles.button}
            >
              <View style={styles.buttonContentWrapper}>
                <BottomNavigationIconSwitcher
                  label={label}
                  color={isFocused ? theme.color.white : theme.color.darkBlue}
                />
                <PoppinsMedium
                  styles={{
                    color: isFocused ? theme.color.white : theme.color.darkBlue,
                    textTransform: "capitalize",
                    textAlign: "center",
                    fontSize: theme.fontSize.sixteen,
                  }}
                >
                  {BottomNavigationNameSwitcher(label)}
                </PoppinsMedium>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: BOTTOM_TAB_HEIGHT,
  },
  buttonContentWrapper: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.gray,
  },
  label: {},
});

export default BottomTabBars;
