import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Social from '../../common/Social/Social';
import Slider from '../../common/Slider/Slider';
import ButtonScrollDown from '../ButtonScrollDown/ButtonScrollDown';
import style from './style.js'

function ContentHomeMain() {
  return (
    <Container sx={style.contentHome} maxWidth="xl">
      <Social />
      <Box sx={style.contentHomeWrapp}>
        <p className='content-home__text'>A Hiking guide</p>
        {/* <h1 style={{ margin: 0, }} className='content-home__title'>Be prepared for the Mountains and beyond!</h1> */}
        <Typography fontFamily={'Chronicle Display'} variant="h1" component="h1">
          Be prepared for the Mountains and beyond!
        </Typography>
        <ButtonScrollDown />
      </Box>
      <Slider />
    </Container>
  );
}

export default ContentHomeMain;