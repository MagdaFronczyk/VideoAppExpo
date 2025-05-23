import { Link, useLocalSearchParams } from "expo-router";
import React, { JSX, useState } from "react";
import { Button, Pressable, Text, View } from "react-native";
import Modal from "react-native-modal";

const Search: React.FC = (): JSX.Element => {
  const { sortBy, query, maxResults, nextPageToken } = useLocalSearchParams();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <Text>Search</Text>
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
      <Button
        accessibilityLabel="Open filter modal"
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
            accessibilityLabel="Close filter modal"
            title="Hide modal"
            onPress={toggleModal}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Search;
