import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, FormControl, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';

function Goals({ onBack }) {
  // State for student information
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    age: '',
    grade: ''
  });

  // State for goals
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');

  // State for notes
  const [goalNotes, setGoalNotes] = useState({});

  // Function to handle input change for student information
  const handleStudentInfoChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  // Function to handle adding a new goal
  const handleAddGoal = () => {
    if (newGoal.trim() !== '') {
      setGoals(prevGoals => [...prevGoals, newGoal]);
      setGoalNotes(prevNotes => ({
        ...prevNotes,
        [newGoal]: ''
      }));
      setNewGoal('');
    }
  };

  // Function to handle deleting a goal
  const handleDeleteGoal = (goal) => {
    setGoals(prevGoals => prevGoals.filter(item => item !== goal));
    setGoalNotes(prevNotes => {
      const updatedNotes = { ...prevNotes };
      delete updatedNotes[goal];
      return updatedNotes;
    });
  };

  // Function to handle editing a note
  const handleEditNote = (goal) => {
    const newNote = prompt('Enter your note:', goalNotes[goal]);
    if (newNote !== null) {
      setGoalNotes(prevNotes => ({
        ...prevNotes,
        [goal]: newNote
      }));
    }
  };

  // Function to handle sharing a note
  const handleShareNote = (goal) => {
    alert(`Sharing note for goal "${goal}": ${goalNotes[goal]}`);
  };

  // Load data from local storage when component mounts
  useEffect(() => {
    const storedStudentInfo = JSON.parse(localStorage.getItem('studentInfo'));
    if (storedStudentInfo) {
      setStudentInfo(storedStudentInfo);
    }

    const storedGoals = JSON.parse(localStorage.getItem('goals'));
    if (storedGoals) {
      setGoals(storedGoals);
    }

    const storedGoalNotes = JSON.parse(localStorage.getItem('goalNotes'));
    if (storedGoalNotes) {
      setGoalNotes(storedGoalNotes);
    }
  }, []);

  // Save data to local storage when student data, goals, or notes change
  useEffect(() => {
    localStorage.setItem('studentInfo', JSON.stringify(studentInfo));
  }, [studentInfo]);

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem('goalNotes', JSON.stringify(goalNotes));
  }, [goalNotes]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Student Information
      </Typography>
      <form>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={studentInfo.name}
          onChange={handleStudentInfoChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Age"
          name="age"
          value={studentInfo.age}
          onChange={handleStudentInfoChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Grade"
          name="grade"
          value={studentInfo.grade}
          onChange={handleStudentInfoChange}
          margin="normal"
        />
      </form>

      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Goals
        </Typography>
        <FormControl fullWidth>
          <TextField
            label="New Goal"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddGoal}>
            Add Goal
          </Button>
        </FormControl>
        <List>
          {goals.map((goal, index) => (
            <ListItem key={index}>
              <ListItemText primary={goal} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => handleEditNote(goal)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="share" onClick={() => handleShareNote(goal)}>
                  <ShareIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteGoal(goal)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Notes
        </Typography>
        <List>
          {goals.map((goal, index) => (
            <ListItem key={index}>
              <ListItemText primary={goalNotes[goal]} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box mt={4}>
        <Button variant="outlined" onClick={onBack}>
          Back
        </Button>
      </Box>
    </Container>
  );
}

export default Goals;




