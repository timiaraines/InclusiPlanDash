import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Toolbar, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useSidebar } from './sidebarContext';  // Import the useSidebar hook

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();
  const { open, closeSidebar } = useSidebar();  // Use context to control the sidebar

  const handleNavigation = (path) => {
    navigate(path);
    closeSidebar();
  };

  const items = [
    { name: 'Home', path: '/dashboard' },
    { name: 'Messages', path: '/chat' },
    { name: 'Documents', path: '/documents' },
    { name: 'IEP Writer', path: '/quilleditor' },
    { name: 'Student Goals', path: '/student-goals' },
    { name: 'Calendar', path: '/calendar' }
  ];

  return (
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
      <Toolbar>
        <IconButton onClick={closeSidebar}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {items.map((item, index) => (
          <ListItem button key={item.name} onClick={() => handleNavigation(item.path)}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

