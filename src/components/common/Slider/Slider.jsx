import React from 'react';
import './style.scss'
import { Box, Button } from '@mui/material';
import style from './style';

function Slider() {
  return (
    <Box sx={style.slider}>
      <Button sx={style.sliderButton}>Start</Button>
      <Button sx={style.sliderButton}>01</Button>
      <Button sx={style.sliderButton}>02</Button>
      <Button sx={style.sliderButton}>03</Button>
    </Box>
  );
}

export default Slider;