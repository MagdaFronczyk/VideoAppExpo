import { useFocusEffect } from "expo-router";
import React, { JSX, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
//components
import PoppinsRegular from "../_common/fonts/PoppinsRegular";
import PoppinsSemiBold from "../_common/fonts/PoppinsSemiBold";
//styles
import { theme } from "@/constants/theme";
//stores
import { getAndSetComments, storeCommentData } from "@/stores/asyncStorage";
//types
import { note } from "@/types/notes";

const Notes: React.FC = (): JSX.Element => {
  const [note, setNote] = useState<note>("");
  const [notesResponse, setNotesResponse] = useState<string[] | []>([]);

  useFocusEffect(() => {
    getAndSetComments(setNotesResponse);
  });

  const handleAddNote = () => {
    if (note.length > 0) {
      storeCommentData(note);
      setNote("");
    }
  };

  return (
    <View>
      {notesResponse.length &&
        notesResponse.map((note) => {
          return (
            <View style={styles.noteContainer} key={note}>
              <PoppinsRegular styles={styles.note}>{note}</PoppinsRegular>
            </View>
          );
        })}
      <TextInput
        onChangeText={setNote}
        value={note}
        placeholder="Enter notes..."
        style={styles.textInput}
      />
      <Pressable
        onPress={handleAddNote}
        style={styles.button}
        disabled={note.length === 0}
      >
        <PoppinsSemiBold styles={styles.addNote}>Add note</PoppinsSemiBold>
      </Pressable>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    height: moderateScale(50),
    borderRadius: moderateScale(12),
    borderWidth: moderateScale(2),
    borderColor: theme.color.lightGray,
    fontFamily: "Poppins-Regular",
    paddingLeft: moderateScale(5),
  },
  button: {
    width: moderateScale(256),
    height: moderateScale(40),
    backgroundColor: theme.color.darkBlue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(8),
    marginTop: moderateScale(10),
    margin: "auto",
  },
  addNote: {
    color: theme.color.white,
    fontSize: theme.fontSize.fourteen,
  },
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
