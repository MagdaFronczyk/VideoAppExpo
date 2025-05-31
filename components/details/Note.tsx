/* eslint-disable react/display-name */
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
//components
import PoppinsRegular from "@/components/_common/fonts/PoppinsRegular";
//styles
import { theme } from "@/constants/theme";
//types
import { INote } from "@/types/notes";

const Note = memo(
  ({ note }: { note: INote }) => (
    <View style={styles.noteContainer}>
      <PoppinsRegular styles={styles.note}>{note.note}</PoppinsRegular>
    </View>
  ),
  (prevProps, nextProps) => {
    return prevProps.note.note === nextProps.note.note;
  }
);

export default Note;

const styles = StyleSheet.create({
  noteContainer: {
    width: "100%",
    height: moderateScale(50),
    borderRadius: moderateScale(12),
    borderWidth: moderateScale(2),
    borderColor: theme.color.lightGray,
    padding: moderateScale(5),
    marginBottom: moderateScale(10),
  },
  note: { fontSize: theme.fontSize.twelve, color: theme.color.darkBlue },
});
