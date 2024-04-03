import React from 'react';
import Box from '@mui/material/Box';
import ImageCard from './imagecard'; 
import userRoles from './roleDes'; 
import useWindowPosition from './useWindowPosition';

export default function RolesDisplay() {
  const checked = useWindowPosition('header');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' }, 
      }}
      id="roles-to-visit"
    >
      {userRoles.map((role, index) => (
        <ImageCard key={index} user={role} checked={checked} />
      ))}
    </Box>
  );
}

