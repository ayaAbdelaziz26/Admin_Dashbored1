import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // for Month and Day grid view
import timeGridPlugin from '@fullcalendar/timegrid'; // for Week and Day time grid view
import interactionPlugin from '@fullcalendar/interaction'; // for interaction support
import { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material'; // Import Material-UI components
import { v4 as uuidv4 } from 'uuid'; // For generating unique ids
import { useMediaQuery } from '@mui/material'; // For handling responsive layout

const Calendar = () => {
  const [events, setEvents] = useState([]);

  // Handle date click to create a new event
  const handleDateClick = (arg) => {
    const newEventTitle = prompt("Enter event title:");
    if (newEventTitle) {
      setEvents([
        ...events,
        { id: uuidv4(), title: newEventTitle, start: arg.dateStr }  // Add unique id to each event
      ]);
    }
  };

  // Handle event drag-and-drop to update its date
  const handleEventDrop = (info) => {
    const { id, startStr } = info.event;
    const updatedEvents = events.map(event =>
      event.id === id ? { ...event, start: startStr } : event
    );
    setEvents(updatedEvents);  // Update the state with the new event dates
  };

  const handleEventClick = (info) => {
    const { id, title } = info.event;
    const confirmDelete = window.confirm(`Are you sure you want to delete the event "${title}"?`);

    if (confirmDelete) {
      // Remove the event from the state
      const updatedEvents = events.filter(event => event.id !== id);
      setEvents(updatedEvents);
    }
  };

  const isSmallScreen = useMediaQuery('(max-width:1100px)');

  return (
    <Box
    display="flex"
    flexDirection={isSmallScreen ? 'column' : 'row'}  // Change direction based on screen size
    justifyContent="space-between"
    >
      {/* Events Summary on Paper */}
      <Box flex={1} padding={2}>
        <Paper elevation={3} sx={{ padding: '16px' }}>
          <Typography variant="h6" gutterBottom>
            Events Summary
          </Typography>
          {events.length === 0 ? (
            <Typography>No events</Typography>
          ) : (
            events
              .filter(event => event.start)  // Filter out events without a valid start date
              .map((event, index) => (
                <Box key={index} mb={2}>
                  <Typography variant="body1">
                    <strong>{event.title}</strong>
                  </Typography>
                  {event.start && (
                    <Typography variant="body2" color="textSecondary">
                      Date: {new Date(event.start).toDateString()}
                    </Typography>
                  )}
                </Box>
              ))
          )}
        </Paper>
      </Box>

      {/* FullCalendar Component */}
      <Box flex={3} padding={2}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          editable={true}  // Allow events to be dragged and resized
          droppable={true}  // Allow dropping events from external sources
          eventDrop={handleEventDrop} 
          eventClick={handleEventClick} 
          headerToolbar={{ 
                  left: 'prev,next', 
                  center: 'title', 
                  right: 'dayGridMonth,timeGridWeek,timeGridDay' 
                }
              }
        />
      </Box>
    </Box>
  );
};

export default Calendar;