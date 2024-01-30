import React from 'react';
import { AppBar, Container } from '@mui/material';
import Logo from '../../common/Logo/Logo';
import Account from '../../common/Account/Account';
import Navigation from '../../common/Navigation/Navigation';
import style from './style';

function Header() {
  return (
    <AppBar sx={style.header}>
      <Container sx={style.headerContainer} maxWidth="xl">
        <Logo />
        <Navigation />
        <Account />
      </Container>
    </AppBar>
  );
}

export default Header;