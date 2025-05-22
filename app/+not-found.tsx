import { Link, Stack } from "expo-router";
import React, { JSX } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const NotFoundScreen: React.FC = (): JSX.Element => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text>This screen does not exist.</Text>
        <Link
          href="/"
          style={styles.link}
          accessibilityLabel="Go to home screen"
          accessibilityHint="Takes you to the home screen"
          accessibilityRole="button"
        >
          <Pressable>
            <Text>Go to home screen!</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
