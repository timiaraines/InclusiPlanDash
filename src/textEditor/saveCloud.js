import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';

const SaveToDeviceDialog = ({ open, onClose, onSaveToDevice }) => {
  const [fileName, setFileName] = useState('UntitledDocument.txt');

  const handleSave = () => {
    onSaveToDevice(fileName);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Save to Device</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter a file name for your document:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="File Name"
          type="text"
          fullWidth
          variant="standard"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaveToDeviceDialog;