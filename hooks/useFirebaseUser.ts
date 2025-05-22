import { FirebaseAuthTypes, getAuth } from "@react-native-firebase/auth";
import { useEffect, useState } from "react";

export const useFirebaseUser = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Handle user state changes
  const onAuthStateChanged = (
    RNFBuser: FirebaseAuthTypes.User | null
  ): void => {
    setUser(RNFBuser);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = getAuth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { user, initializing };
};
