import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Services = () => {
  const services = [
    {
      title: 'Automated IEP Report Generation',
      description: 'Generate Individualized Education Program (IEP) reports automatically with our intuitive tools.',

    },
    {
      title: 'Real-time Progress Tracking and Analytics',
      description: 'Track student progress in real-time and gain insights through powerful analytics.',
   
    },
    {
      title: 'Collaborative Tools for Teachers and Parents',
      description: 'Facilitate collaboration between teachers and parents with our easy-to-use platform.',

    },
    {
      title: 'Resources and Support for Educational Best Practices',
      description: 'Access a comprehensive library of resources and get support for implementing best practices.',

    }
  ];

  return (
    <Container maxWidth="md">
      <Box mt={4} mb={2}>
        <Button variant="outlined" component={Link} to="/">
          Go Back to Landing Page
        </Button>
      </Box>
      <Box mt={2}>
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;


