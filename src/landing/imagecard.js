import React from 'react';
import { Card, CardContent, CardMedia, Typography, Collapse } from '@mui/material';

export default function ImageCard({ user, checked }) {
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card 
        sx={{
          maxWidth: 645,
          background: 'rgba(0,0,0,0.5)',
          margin: '20px',
        }}
      >
        <CardMedia
          component="img"
          height="440"
          image={user.imageUrl}
          alt={user.role} 
          sx={{
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            sx={{
              fontFamily: 'Nunito',
              fontWeight: 'bold',
              fontSize: '2rem',
              color: '#fff',
            }}
          >
            {user.role} 
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            sx={{
              fontFamily: 'Nunito',
              fontSize: '1.1rem',
              color: '#ddd',
            }}
          >
            {user.description} 
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
