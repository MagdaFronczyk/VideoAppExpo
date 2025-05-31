import React, { JSX, useState } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";
import { useFocusEffect } from "expo-router";
import { moderateScale } from "react-native-size-matters";
//components
import Note from "./Note";
import PoppinsSemiBold from "@/components/_common/fonts/PoppinsSemiBold";
//store
import { getAndSetComments, storeCommentData } from "@/stores/asyncStorage";
//styles
import { theme } from "@/constants/theme";
//types
import { INote } from "@/types/notes";

const Notes: React.FC = (): JSX.Element => {
  const [notesResponse, setNotesResponse] = useState<INote[] | []>([]);
  const [note, setNote] = useState<string>("");

  const handleAddNote = async () => {
    if (note) {
      try {
        await storeCommentData({ note: note });
        setNote("");
        await getAndSetComments(setNotesResponse);
      } catch (error) {
        console.error(error);
      }
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      getAndSetComments(setNotesResponse);
    }, [])
  );

  return (
    <>
      {notesResponse.map((note) => {
        return <Note note={note} key={note.note} />;
      })}
      <TextInput
        onChangeText={setNote}
        value={note}
        placeholder="Enter notes..."
        placeholderTextColor={theme.color.lightGray}
        style={styles.textInput}
      />
      <Pressable
        onPress={handleAddNote}
        style={styles.button}
        disabled={note.length === 0}
      >
        <PoppinsSemiBold styles={styles.addNote}>Add note</PoppinsSemiBold>
      </Pressable>
    </>
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
    bottom: moderateScale(0),
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
});
