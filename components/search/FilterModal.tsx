import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";
//constants
import { BOTTOM_TAB_HEIGHT } from "@/constants/navigation";
//styles
import { theme } from "@/constants/theme";
//components
import PoppinsRegular from "../fonts/PoppinsRegular";
import PoppinsSemiBold from "../fonts/PoppinsSemiBold";

type Props = {
  isModalVisible: boolean;
  toggleModal: () => void;
};

const FilterModal: React.FC<Props> = ({ isModalVisible, toggleModal }) => {
  const insets = useSafeAreaInsets();
  const [isCheckedDateLatest, setIsCheckedDateLatest] = useState(false);
  const [isCheckedDateOldest, setIsCheckedDateOldest] = useState(false);
  const [isCheckedPopular, setIsCheckedPopular] = useState(false);

  const filterData = [
    {
      title: "Upload date: latest",
      isChecked: isCheckedDateLatest,
      setIsChecked: setIsCheckedDateLatest,
    },
    {
      title: "Upload date: oldest",
      isChecked: isCheckedDateOldest,
      setIsChecked: setIsCheckedDateOldest,
    },
    {
      title: "Most popular",
      isChecked: isCheckedPopular,
      setIsChecked: setIsCheckedPopular,
    },
  ];

  return (
    <Modal
      isVisible={isModalVisible}
      style={{ margin: "auto" }}
      customBackdrop={
        <View
          style={[
            styles.customBackDrop,
            { marginBottom: BOTTOM_TAB_HEIGHT + insets.bottom },
          ]}
        ></View>
      }
    >
      <View style={styles.modal}>
        <PoppinsSemiBold styles={styles.title}>
          Sort records by:
        </PoppinsSemiBold>
        {filterData.map((filter) => {
          return (
            <View style={styles.checkboxContainer} key={filter.title}>
              <BouncyCheckbox
                isChecked={filter.isChecked}
                fillColor={theme.color.darkBlue}
                size={moderateScale(24)}
                iconStyle={{
                  borderColor: theme.color.darkBlue,
                  borderWidth: moderateScale(2),
                }}
                onPress={() => {
                  filter.setIsChecked(!filter.isChecked);
                }}
              />
              <PoppinsRegular styles={styles.filter}>
                {filter.title}
              </PoppinsRegular>
            </View>
          );
        })}
        <Pressable
          accessibilityLabel="Close filter modal"
          accessibilityHint="Closes filter modal"
          onPress={toggleModal}
          style={styles.button}
        >
          <PoppinsSemiBold styles={styles.confirm}>Confirm</PoppinsSemiBold>
        </Pressable>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  customBackDrop: {
    flex: 1,
    backgroundColor: "black",
  },
  modal: {
    width: moderateScale(320),
    height: moderateScale(400),
    backgroundColor: theme.color.gray,
    borderRadius: moderateScale(24),
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateScale(32),
  },
  title: {
    color: theme.color.white,
    fontSize: theme.fontSize.eighteen,
    marginBottom: moderateScale(30),
  },
  checkboxContainer: { flexDirection: "row", marginBottom: moderateScale(20) },
  filter: {
    fontSize: theme.fontSize.twelve,
    color: theme.color.white,
    paddingTop: moderateScale(3),
  },
  button: {
    width: "100%",
    height: moderateScale(40),
    borderRadius: moderateScale(8),
    backgroundColor: theme.color.darkBlue,
    marginTop: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  confirm: { color: theme.color.white, fontSize: theme.fontSize.fourteen },
});
