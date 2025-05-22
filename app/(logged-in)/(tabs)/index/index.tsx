import { Link } from "expo-router";
import React, { JSX } from "react";
import { Pressable, Text, View } from "react-native";

const Categories: React.FC = (): JSX.Element => {
  return (
    <View>
      <Text>Categories</Text>
      <Link
        href="/search"
        asChild
        accessibilityLabel="Go to search"
        accessibilityHint="Takes you to the search screen"
        accessibilityRole="button"
      >
        <Pressable>
          <Text>Go to search</Text>
        </Pressable>
      </Link>
      <Link
        href={{
          pathname: "/search",
          params: { videoId: "123" },
        }}
        asChild
        accessibilityLabel="Go to search of the category"
        accessibilityHint="Takes you to the search screen of the category"
        accessibilityRole="button"
      >
        <Pressable>
          <Text>Go to search with params</Text>
        </Pressable>
      </Link>
      <Link
        href="../(settings)"
        asChild
        accessibilityLabel="Go to settings"
        accessibilityHint="Takes you to the settings screen"
        accessibilityRole="button"
      >
        <Pressable>
          <Text>Go to settings</Text>
        </Pressable>
      </Link>
      <Link
        href={{
          pathname: "../../(detailsModal)",
          params: { videoId: "123" },
        }}
        asChild
        accessibilityLabel="Go to details"
        accessibilityHint="Takes you to the details screen"
        accessibilityRole="button"
      >
        <Pressable>
          <Text>Go to details with params</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Categories;
