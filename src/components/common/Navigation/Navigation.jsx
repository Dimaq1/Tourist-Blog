import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppBar, IconButton, Drawer, List, ListItem, Divider, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './style.scss';
import style from './style.js';
import pathes from '../../../constants/pathes';
import theme from '../../../theme/theme.js';
import Logo from '../Logo/Logo.jsx';
import Account from '../Account/Account.jsx';
import { drawerClose, drawerOpen } from '../../../store/navigation/reducer.js';

function Navigation() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDrawerOpen = useSelector(state => state.navigationReducer.drawerOpenValue);
  const dispatch = useDispatch();
  const handleDrawerOpen = () => {
    dispatch(drawerOpen())
  };

  const handleDrawerClose = () => {
    dispatch(drawerClose());
  };

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon sx={style.menuIcon} />
          </IconButton>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={handleDrawerClose}
            sx={style.drawer}
            PaperProps={{
              sx: style.drawerPaperProps,
            }}
          >
            <Box sx={style.inner}>
              <Logo />
              <IconButton
                onClick={handleDrawerClose}
                sx={style.iconMenuButtonClose}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider />
            <AppBar component={'nav'} sx={style.navbar}>
              <List>
                <ListItem>
                  <NavLink className={'navlink'} to={pathes.home} onClick={handleDrawerClose}>
                    Home
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink className={'navlink'} to={pathes.equipment} onClick={handleDrawerClose}>
                    Equipment
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink className={'navlink'} to={pathes.about} onClick={handleDrawerClose}>
                    About us
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink className={'navlink'} to={pathes.blog} onClick={handleDrawerClose}>
                    Blog
                  </NavLink>
                </ListItem>
              </List>
              <Account onClick={handleDrawerClose} />
            </AppBar>
          </Drawer>
        </>
      ) :
        <AppBar component={'nav'} sx={style.navbar}>
          <List sx={style.navbarList}>
            <ListItem sx={style.navbarListItem}>
              <NavLink className={'navlink'} to={pathes.home}>
                Home
              </NavLink>
            </ListItem>
            <ListItem sx={style.navbarListItem}>
              <NavLink className={'navlink'} to={pathes.equipment}>
                Equipment
              </NavLink>
            </ListItem>
            <ListItem sx={style.navbarListItem}>
              <NavLink className={'navlink'} to={pathes.about}>
                About us
              </NavLink>
            </ListItem>
            <ListItem sx={style.navbarListItem}>
              <NavLink className={'navlink'} to={pathes.blog}>
                Blog
              </NavLink>
            </ListItem>
          </List>
        </AppBar>}
    </>
  );
}

export default Navigation;