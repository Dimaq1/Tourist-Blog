import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Social from '../../components/common/Social/index';
import Email from '../../components/common/Email/index';
import ButtonScrollDown from '../../components/common/ButtonScrollDown/ButtonScrollDown.jsx';
import style from './style.js'
import Line from '../../components/common/Line/Line.jsx';
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