import { useFocusEffect, useRouter } from "expo-router";
import React, { JSX, useState } from "react";
import { Pressable, Text } from "react-native";

const LogIn: React.FC = (): JSX.Element => {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    // Handle login logic here
    setLoggedIn(true);
  };

  useFocusEffect(
    React.useCallback(() => {
      if (loggedIn) {
        router.navigate("./(logged-in)");
      }
    }, [loggedIn, router])
  );

  return (
    <Pressable
      accessibilityLabel="Logowanie"
      accessibilityHint="Naciśnij aby się zalogować"
      onPress={handleLogin}
    >
      <Text>LogIn</Text>
    </Pressable>
  );
};

export default LogIn;
