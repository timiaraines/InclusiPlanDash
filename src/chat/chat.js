import React, { useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import { Button, TextField, Box } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../useAuth'; // Adjust path as necessary

const Chat = () => {
  const { currentUser } = useAuth();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function createDirectChat(creds) {
    if (!username) {
      setError("Username can't be empty.");
      return;
    }
    ChatEngine.getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      (chat) => {
        if (!chat) {
          setError('Failed to create chat. Please try again.');
        } else {
          setError('');
          setUsername('');
        }
      }
    );
  }

  return (
    <div>
      <Button startIcon={<ArrowBack />} variant="outlined" color="primary" onClick={() => navigate(-1)}>
      </Button>
      {currentUser && (
        <ChatEngine
          height='100vh'
          userName={currentUser.email}
          userSecret={currentUser.uid}
          projectID='bf5f91b0-3a15-4190-b190-9540255b52db'
          renderNewChatForm={(creds) => (
            <Box sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, padding: '20px', borderRadius: '4px' }}>
              <TextField label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} error={Boolean(error)} helperText={error} />
              <Button variant="contained" color="primary" onClick={() => createDirectChat(creds)}>Create</Button>
            </Box>
          )}
        />
      )}
    </div>
  );
}

export default Chat;





