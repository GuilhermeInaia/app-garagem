import * as React from 'react';
// import { AppBar, Box, Toolbar, Typography, IconButton, MenuItem, Menu, Drawer, Divider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import Divider  from '@mui/material/Divider';
import {List, ListItem, ListItemButton, ListItemText, ListItemIcon} from '@mui/material';
import {Home, DirectionsCar, Settings, } from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';

import './styles.css'


export default function Navbar() {
  const navigate = useNavigate()

  const [menu, setMenu] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuLateral = () => setMenu(!menu)

  const redirecionar = (url) => {
    navigate(url);
    handleMenuLateral(false);
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer onClose={handleMenuLateral} open={menu}>
        <div className='menu'>
        MENU
        </div>
        <Divider/>
        <List>
          <ListItemButton onClick={() => redirecionar('/')}>
            <ListItemIcon> <Home/> </ListItemIcon>   
            <ListItemText>Inicio</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => redirecionar('/listar')}>
            <ListItemIcon> <DirectionsCar/> </ListItemIcon>   
            <ListItemText>Veiculos</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => redirecionar('/config')}>
            <ListItemIcon> <Settings/> </ListItemIcon>   
            <ListItemText>Configurações</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuLateral}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Minha Garagem
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
                <AccountCircle />
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
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem style={{color:'red'}} onClick={() => {handleClose (); navigate('/entrar')}}>Sair</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
