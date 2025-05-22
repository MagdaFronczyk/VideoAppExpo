import { Link, useLocalSearchParams } from "expo-router";
import React, { JSX, useEffect, useState } from "react";
import { Button, Pressable, Text, View } from "react-native";
import Modal from "react-native-modal";

const Search: React.FC = (): JSX.Element => {
  const { videoId } = useLocalSearchParams();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    console.log("Search params: ", videoId);
  }, [videoId]);

  return (
    <View>
      <Text>Search</Text>
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
      <Button
        accessibilityLabel="Przejdź do moadla filtrów"
        title="Show modal"
        onPress={toggleModal}
      />
      <Modal
        isVisible={isModalVisible}
        style={{ margin: "auto" }}
        customBackdrop={
          <View
            style={{
              flex: 1,
              backgroundColor: "black",
              marginBottom: 120,
            }}
          ></View>
        }
      >
        <View style={{ width: 320, height: 400, backgroundColor: "#8D99AE" }}>
          <Button
            accessibilityLabel="Zamyka modal filtrów"
            title="Hide modal"
            onPress={toggleModal}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Search;
