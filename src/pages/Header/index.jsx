import React from 'react';
import { AppBar, Container, useMediaQuery, Link } from '@mui/material';
import Logo from '../../components/Logo/index';
import Navigation from '../../components/Navigation/Navigation';
import style from './style';
import theme from '../../theme/theme';
import { useLocation } from 'react-router-dom';
import pathes from '../../constants/pathes';

function Header() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { pathname } = useLocation();
  const isTransparentsPages = pathname === pathes.home || pathname === `/${pathes.about}`;

  return (
    <AppBar sx={{ ...style.header, bgcolor: !isTransparentsPages ? theme.palette.background.main : 'transparent' }}>
      <Container sx={style.headerContainer} maxWidth="xl">
        <Logo />
        <Navigation />
        {!isMobile && (
          <Link href="tel:+1234567890" sx={style.tel} >+1234567890</Link>
        )}
      </Container>
    </AppBar>
  );
}

export default Header;