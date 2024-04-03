import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Header from './header'; 
import RolesDisplay from './roles'; 
import background from '../images/bg.webp'

export default function Landing() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CssBaseline />
      <Header />
      <RolesDisplay />
    </Box>
  );
}
