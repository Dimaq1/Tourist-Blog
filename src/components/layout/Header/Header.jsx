import React from 'react';
import { AppBar, Container, useMediaQuery } from '@mui/material';
import Logo from '../../common/Logo/Logo';
import Account from '../../common/Account/Account';
import Navigation from '../../common/Navigation/Navigation';
import style from './style';
import theme from '../../../theme/theme';

function Header() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar sx={style.header}>
      <Container sx={style.headerContainer} maxWidth="xl">
        <Logo />
        <Navigation />
        {!isMobile && (
          <Account />
        )}
      </Container>
    </AppBar>
  );
}

export default Header;