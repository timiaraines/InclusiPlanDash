import { doc, setDoc } from "firebase/firestore";
import db from './firebaseConfig';

async function addDocument() {
  const docRef = doc(db, "testCollection", "testDocument");
  try {
    await setDoc(docRef, {
      title: "Hello World",
      content: "This is a simple test document.",
      createdAt: new Date()  // Using JavaScript Date object for simplicity
    });
    console.log("Document written successfully!");
  } catch (error) {
    console.error("Error writing document: ", error);
  }
}
export default addDocument;