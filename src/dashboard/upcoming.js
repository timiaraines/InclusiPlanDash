import React from 'react';
import ReactDOM from 'react-dom';
import UpcomingEvents from './events'; // Adjust the import path accordingly

const events = [
  {
    title: 'School Assembly',
    date: '2024-05-15',
    location: 'School Auditorium',
    description: 'Monthly school assembly for all students.'
  },
  {
    title: 'Parent-Teacher Conference',
    date: '2024-05-20',
    location: 'School Classroom',
    description: 'Meeting between parents and teachers to discuss student progress.'
  }
];

ReactDOM.render(
  <React.StrictMode>
    <UpcomingEvents events={events} />
  </React.StrictMode>,
  document.getElementById('root')
);