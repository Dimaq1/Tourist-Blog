import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Social from '../../common/Social/Social';
import Email from '../../common/Email/index';
import ButtonScrollDown from '../ButtonScrollDown/ButtonScrollDown';
import style from './style.js'
import Line from '../Line/Line.jsx';

function ContentHomeMain() {

  return (
    <Container sx={style.contentHome} maxWidth="xl">
      <Social />
      <Box sx={style.contentHomeWrapp}>
        <Typography sx={style.contentHometext}>
          <Line />
          A Hiking guide
        </Typography>
        <Typography sx={style.contentHomeTitle} variant="h1" component="h1">
          Be prepared for the Mountains and beyond!
        </Typography>
        <ButtonScrollDown />
      </Box>
      <Email />
    </Container>
  );
}

export default ContentHomeMain;