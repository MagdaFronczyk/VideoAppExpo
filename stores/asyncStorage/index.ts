import AsyncStorage from "@react-native-async-storage/async-storage";
//types
import { STORAGE_KEY } from "@/types/enums";
import { Inote } from "@/types/notes";

export const getAsyncNotesData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY.VIDEO_NOTE);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // console.error(e);
  }
};

export const storeCommentData = async (note: Inote) => {
  try {
    const notesAsyncStorage: Inote[] | null = await getAsyncNotesData();
    console.log(notesAsyncStorage);
    await AsyncStorage.setItem(
      STORAGE_KEY.VIDEO_NOTE,
      notesAsyncStorage
        ? JSON.stringify([...notesAsyncStorage, note])
        : JSON.stringify([note])
    );
  } catch (e) {
    // saving error
  }
};

export const getAndSetComments = async (
  setComments: React.Dispatch<React.SetStateAction<Inote[]>>
): Promise<void> => {
  try {
    const notesAsyncStorage: Inote[] = await getAsyncNotesData();
    console.log("get and set", notesAsyncStorage);
    if (notesAsyncStorage !== null) {
      setComments(notesAsyncStorage);
    }
  } catch (err) {
    setComments([]);
    // console.error(err);
  }
};
