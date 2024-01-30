import React from 'react';
import { Box } from '@mui/material';
import style from './style.js'

function BackgroundMain() {
  return (
    <Box sx={style.bgWrapp}>
      <Box sx={style.bgFogging} />
      <Box sx={style.bgHome} />
    </Box>
  );
}

export default BackgroundMain;