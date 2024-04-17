import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend or handle form submission here
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Container maxWidth="md">
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>
          Contact InclusiPlan HQ
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            id="name"
            name="name"
            label="Your Name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            id="email"
            name="email"
            label="Your Email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            id="message"
            name="message"
            label="Your Message"
            multiline
            rows={4}
            variant="outlined"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Send Message
          </Button>
        </form>
        <Button variant="outlined" component={Link} to="/" style={{ marginTop: '1rem' }}>
          Go Back
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
