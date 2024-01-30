import React from 'react';
import { Typography } from '@mui/material';
import style from './style.js'

function Line() {
  return (
    <Typography sx={style} component='span' />
  );
}

export default Line;