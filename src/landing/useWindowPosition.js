import React from 'react';
import { CssBaseline } from '@mui/material';
import Header from './header'; 
import RolesDisplay from './roles'; 
import { styled } from '@mui/system';

const StyledAppContainer = styled('div')({
  minHeight: '100vh',
  backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg.webp'})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

export default function App() {
  return (
    <StyledAppContainer>
      <CssBaseline />
      <Header />
      <RolesDisplay />
    </StyledAppContainer>
  );
}
