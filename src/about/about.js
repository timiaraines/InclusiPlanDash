import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This function will take the user back to the previous page
  };

  return (
    <Container maxWidth="md">
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>
          About InclusiPlan
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Empowering Education, Simplifying Processes
        </Typography>
        <Typography paragraph>
          InclusiPlan was founded with the vision to make special education processes as seamless as possible for both educators and parents. Our platform provides tools and resources tailored specifically to the needs of special education, ensuring that students receive the most effective support.
        </Typography>
        <Typography paragraph>
          We understand the unique challenges faced by teachers and parents of special education students. Managing Individualized Education Plans (IEPs), coordinating with various stakeholders, and tracking student progress can be overwhelming. InclusiPlan streamlines these tasks, allowing teachers and parents to focus more on what truly matters—the students.
        </Typography>
        <Typography paragraph>
          Our features include:
        </Typography>
        <ul>
          <li>Automated IEP report generation</li>
          <li>Real-time progress tracking and analytics</li>
          <li>Collaborative tools for teachers and parents</li>
          <li>Resources and support for educational best practices</li>
        </ul>
        <Typography paragraph>
          At InclusiPlan, we believe in the power of education and the right of every student to access quality learning experiences tailored to their needs. Join us in our mission to transform special education and make a difference in the lives of students and their families.
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Our Commitment to Accessibility and Inclusion
        </Typography>
        <Typography paragraph>
          Accessibility and inclusion are at the core of our mission. InclusiPlan is committed to ensuring that our platform is accessible to all users, regardless of their abilities or disabilities. We continuously work to improve our features based on feedback from our community of educators and parents.
        </Typography>
        <Typography paragraph>
          Thank you for choosing InclusiPlan. Together, we can make special education better for everyone involved.
        </Typography>
        <Button variant="contained" onClick={handleGoBack}>Go Back</Button>
      </Box>
    </Container>
  );
};

export default About;


