import React, { useEffect, useState } from 'react';
import { AppBar, IconButton, Toolbar, Collapse, Box, Typography, Drawer, List, ListItem, ListItemText, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link as Scroll } from 'react-scroll';

export default function Header() {
  const [checked, setChecked] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setChecked(true);
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'About', 'Services', 'Contact', 'Sign Up'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
      }}
      id="header"
    >
      <AppBar position="static" elevation={0} sx={{ background: 'none', width: '100%' }}>
        <Toolbar sx={{ width: '100%', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ color: '#0077b6' }}>
            Empowering Every Step with Inclusive Planning
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Teacher Login</MenuItem>
              <MenuItem onClick={handleClose}>Parent Login</MenuItem>
            </Menu>
            <IconButton sx={{ color: 'white' }} onClick={toggleDrawer(true)}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor={'right'} open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>

      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} sx={{ flexGrow: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ color: '#fff', fontWeight: 'bold' }}>
            Welcome to <br />
            <span sx={{ color: '#5AFF3D' }}>InclusiPlan</span>
          </Typography>
          <Scroll to="roles-to-visit" smooth={true}>
            <IconButton sx={{ color: '#0077b6', fontSize: '4rem' }}>
              <ExpandMoreIcon fontSize="inherit" />
            </IconButton>
          </Scroll>
        </Box>
      </Collapse>
    </Box>
  );
}




