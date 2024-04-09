import React from 'react';
import { Box } from '@mui/material';
import style from './style.js'

function Background({ bgImage }) {
  return (
    <Box sx={style.bgWrapp}>
      <Box sx={style.bgFogging} />
      <Box sx={{ ...style.bgMain, backgroundImage: `url(${bgImage})` }} />
      <Box sx={style.bgFogginDown} />
    </Box>
  );
}

export default Background;