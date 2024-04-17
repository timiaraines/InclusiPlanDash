import React from 'react';
import { Button } from '@mui/material';
import { doc, setDoc } from 'firebase/firestore';
import db from './firebase/firebase';  // Make sure this path is correct

const addDocument = async () => {
  const docRef = doc(db, "testCollection", "testDocument");
  try {
    await setDoc(docRef, {
      title: "Hello World",
      content: "This is a simple test document.",
      createdAt: new Date()
    });
    console.log("Document written successfully!");
    alert("Document written successfully!");
  } catch (error) {
    console.error("Error writing document: ", error);
    alert("Error writing document: " + error.message);
  }
};

function TestFirestore() {
  return (
    <div style={{ marginTop: 20, padding: 20 }}>
      <Button onClick={addDocument} variant="contained" color="primary">
        Add Test Document
      </Button>
    </div>
  );
}

export default TestFirestore;

