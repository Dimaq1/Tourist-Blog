import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Social from '../Social/index';
import Email from '../Email/index';
import ButtonScrollDown from '../ButtonScrollDown/index';
import style from './style.js'
import Line from '../Line/index';
import { useLocation } from 'react-router-dom';
import pathes from '../../constants/pathes.js';

function ContentTitle({ title }) {
  const { pathname } = useLocation();
  const isMainTitlePage = pathname === pathes.home

  return (
    <Container sx={style.container} maxWidth="xl">
      <Social />
      <Box sx={style.wrapp}>
        <Typography sx={style.text}>
          <Line />
          A Hiking guide
        </Typography>
        <Typography sx={style.title} variant="h2" component={isMainTitlePage ? 'h1' : 'h2'}>
          {title}
        </Typography>
        <ButtonScrollDown />
      </Box>
      <Email />
    </Container>
  );
}

export default ContentTitle;