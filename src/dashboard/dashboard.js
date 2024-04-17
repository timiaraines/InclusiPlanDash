import React, { useState } from 'react';
import { Box, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Toolbar, Typography, Divider, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import EditIcon from '@mui/icons-material/Edit';
import GoalsIcon from '@mui/icons-material/Flag';  // Example: assuming you have an icon for goals
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ResponsiveAppBar from '../global/header.js';
import StudentList from './studentList';  // Ensure correct import path


const drawerWidth = 240;

function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleDrawerClose();
  };

  const items = [
    { name: 'Home', path: '/dashboard', icon: <HomeIcon /> },
    { name: 'Messages', path: '/chat', icon: <MailIcon /> },
    { name: 'Documents', path: '/documents', icon: <InsertDriveFileIcon /> },
    { name: 'IEP Writer', path: '/quilleditor', icon: <EditIcon /> },
    { name: 'Student Goals', path: '/student-goals', icon: <GoalsIcon /> },
    { name: 'Calendar', path: '/calendar', icon: <CalendarTodayIcon /> }
  ];

  const drawer = (
    <div>
      <Toolbar>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {items.map((item) => (
          <ListItem button key={item.name} onClick={() => handleNavigation(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ResponsiveAppBar handleDrawerToggle={handleDrawerOpen} />
      <Drawer
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            overflowX: 'hidden',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${open ? drawerWidth : 0}px)`,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        <Toolbar />
        <Typography paragraph>
          Welcome to your dashboard.
        </Typography>
        <StudentList />
      </Box>
    </Box>
  );
}

export default Dashboard;








