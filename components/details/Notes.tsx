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
import { Inote } from "@/types/notes";

const Notes: React.FC = (): JSX.Element => {
  const [note, setNote] = useState<Inote>("");
  const [notesResponse, setNotesResponse] = useState<string[] | []>([]);

  const handleAddNote = async () => {
    if (note.length > 0) {
      try {
        await storeCommentData(note);
        setNote("");
        await getAndSetComments(setNotesResponse);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  textInput: {
    width: "100%",
    height: moderateScale(50),
    borderRadius: moderateScale(12),
    borderWidth: moderateScale(2),
    borderColor: theme.color.lightGray,
    fontFamily: "Poppins-Regular",
    paddingLeft: moderateScale(5),
    bottom: moderateScale(0),
    position: "absolute",
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
