import { Link } from "expo-router";
import React, { JSX } from "react";
import { Pressable, Text, View } from "react-native";

const Categories: React.FC = (): JSX.Element => {
  return (
    <View>
      <Text>Categories</Text>
      <Link href="/search" asChild>
        <Pressable
          accessibilityLabel="Przejdź do wyszukiwarki"
          accessibilityHint="Kieruje do wyszukiwarki"
        >
          <Text>Go to search</Text>
        </Pressable>
      </Link>
      <Link
        href={{
          pathname: "/search",
          params: { videoId: "123" },
        }}
        asChild
      >
        <Pressable
          accessibilityLabel="Przejdź do wyszukiwarki danej kategorii"
          accessibilityHint="Kieruje do wyszukiwarki danej katergorii"
        >
          <Text>Go to search with params</Text>
        </Pressable>
      </Link>
      <Link href="../(settings)" asChild>
        <Pressable
          accessibilityLabel="Przejdź do ustawień"
          accessibilityHint="Kieruje do ustawień"
        >
          <Text>Go to settings</Text>
        </Pressable>
      </Link>
      <Link
        href={{
          pathname: "../../(detailsModal)",
          params: { videoId: "123" },
        }}
        asChild
      >
        <Pressable
          accessibilityLabel="Przejdź do szczegółów"
          accessibilityHint="Kieruje do szczegółów nagrania"
        >
          <Text>Go to details with params</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Categories;
