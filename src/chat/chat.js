import React, { useState } from 'react';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import { Button, TextField, Box } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';

const Chat = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  function createDirectChat(creds) {
    if (!username) {
      setError("Username can't be empty.");
      return;
    }
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      (chat) => {
        if (!chat) {
          setError('Failed to create chat. Please try again.');
        } else {
          setError(''); // Reset error message on successful chat creation
          setUsername(''); // Reset username input
        }
      }
    );
  }

  function renderChatForm(creds) {
    return (
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          padding: '20px',
          borderRadius: '4px'
        }}
      >
        <TextField 
          label="Username" 
          variant="outlined"
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          error={Boolean(error)}
          helperText={error}
        />
        <Button variant="contained" color="primary" onClick={() => createDirectChat(creds)}>
          Create
        </Button>
      </Box>
    );
  }

  return (
    <div>
      <Button startIcon={<ArrowBack />} variant="outlined" color="primary" onClick={() => window.history.back()}>
      </Button>
      <ChatEngine
        height='100vh'
        userName='timiaraines@gmail.com'
        userSecret='1234tr'
        projectID='bf5f91b0-3a15-4190-b190-9540255b52db'
        renderNewChatForm={(creds) => renderChatForm(creds)}
      />
    </div>
  );
}

export default Chat;


