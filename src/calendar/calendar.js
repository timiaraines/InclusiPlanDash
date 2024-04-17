import React, { useState } from 'react';
import { Container, Box, Button } from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Scheduler = () => {
  const [events, setEvents] = useState([]);

  const handleEventClick = (event) => {
    alert(`Event: ${event.title}\nStart: ${event.start}\nEnd: ${event.end}`);
  };

  const handleAddEvent = () => {
    const newEvent = {
      title: 'New Event',
      start: new Date(),
      end: new Date(),
      allDay: true,
    };
    setEvents([...events, newEvent]);
  };

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Button onClick={handleAddEvent} variant="contained" color="primary">Add Event</Button>
      </Box>
      <Box mt={4}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectEvent={handleEventClick}
        />
      </Box>
    </Container>
  );
};

export default Scheduler;
