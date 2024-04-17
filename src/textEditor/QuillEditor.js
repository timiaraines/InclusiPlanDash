import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ResponsiveAppBar from '../global/header.js';
import { getFirestore, doc, setDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadString } from 'firebase/storage';
import { enableIndexedDbPersistence } from 'firebase/firestore';
import db from '../firebase/firebase';
import { v4 as uuidv4 } from 'uuid';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField } from '@mui/material';

const QuillEditor = () => {
  const [text, setText] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [fileName, setFileName] = useState("UntitledDocument.txt");
  const [documentId, setDocumentId] = useState(null);

  useEffect(() => {
    enableOfflinePersistence(); // Enable offline persistence when the component mounts
  }, []);

  const enableOfflinePersistence = async () => {
    try {
      const firestore = getFirestore();
      await enableIndexedDbPersistence(firestore);
    } catch (error) {
      console.error('Error enabling offline persistence:', error);
    }
  };

  const handleOpenDialog = () => {
    if (!documentId) {
      setDocumentId(uuidv4()); // Generate a new document ID if one doesn't already exist
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const saveDocument = async (saveToCloud) => {
    if (saveToCloud) {
      const storage = getStorage();
      const storageRef = ref(storage, 'userDocuments/' + fileName);

      try {
        await uploadString(storageRef, text, 'data');
        alert('Document saved successfully to cloud!');
      } catch (error) {
        console.error("Error saving document to cloud:", error);
        alert('Error saving document to cloud: ' + error.message);
      }
    } else {
      // Save document to device
      const element = document.createElement("a");
      const file = new Blob([text], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = fileName;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      alert('Document saved to your device!');
    }
    handleCloseDialog();
  };

  return (
    <div>
      <ResponsiveAppBar />
      <div style={{ padding: 50 }}>
        <h1>Create a document below:</h1>
        <ReactQuill 
          value={text} 
          onChange={setText}
          theme="snow"
          placeholder="Start typing here..."
        />
        <Button onClick={handleOpenDialog} variant="outlined" color="primary">Save Document</Button>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Save Your Document</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="fileName"
              label="File Name"
              type="text"
              fullWidth
              variant="outlined"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
            <DialogContentText style={{ marginTop: 20 }}>
              Would you like to save this document to your device or to the cloud?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => saveDocument(false)}>Save to Device</Button>
            <Button onClick={() => saveDocument(true)} color="primary">Save to Cloud</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default QuillEditor;








