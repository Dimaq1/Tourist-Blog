import React from 'react';
import './style.scss'
import { Container } from '@mui/material';
import Logo from '../../common/Logo/Logo';
import Account from '../../common/Account/Account';
import Navigation from '../../common/Navigation/Navigation';

function Header() {
  return (
    <header className='header'>
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }} maxWidth="xl">
        <Logo />
        <Navigation />
        <Account />
      </Container>
    </header>
  );
}

export default Header;