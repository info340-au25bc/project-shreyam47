import firebase from "./firebase";
import { sustainableClothingData } from "./clothingData";

export async function uploadClothingData() {
  const firestore = firebase.firestore();

  try {
    const colRef = firestore.collection("clothing");
    const writes = sustainableClothingData.map((item) => colRef.add(item));
    await Promise.all(writes);
  } catch (error) {
    console.error("Upload failed");
  }
}
