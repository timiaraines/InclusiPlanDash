import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';

const SaveToCloudDialog = ({ open, onClose, onSaveToCloud }) => {
    const [title, setTitle] = useState('');
  
    const handleSave = () => {
      onSaveToCloud(title);
      onClose();
    };
  
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Save to Cloud</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a title for your document:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Document Title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
  
  

export default SaveToCloudDialog;

