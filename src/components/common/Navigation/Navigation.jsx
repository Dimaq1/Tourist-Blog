import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, List, ListItem } from '@mui/material';
import './style.scss'
import style from './style.js'
import pathes from '../../../constants/pathes';

function Navigation() {


  return (
    <AppBar component={'nav'} sx={style.navbar}>
      <List sx={style.navbarList}>
        <ListItem sx={style.navbarListItem}>
          <NavLink style={style.navbarListItemLink} to={pathes.home}>
            Home
          </NavLink>
        </ListItem>
        <ListItem sx={style.navbarListItem}>
          <NavLink style={style.navbarListItemLink} to={pathes.equipment}>
            Equipment
          </NavLink>
        </ListItem>
        <ListItem sx={style.navbarListItem}>
          <NavLink style={style.navbarListItemLink} to={pathes.about}>
            About us
          </NavLink>
        </ListItem>
        <ListItem sx={style.navbarListItem}>
          <NavLink style={style.navbarListItemLink} to={pathes.blog}>
            Blog
          </NavLink>
        </ListItem>
      </List>
    </AppBar>
  );

}

export default Navigation;