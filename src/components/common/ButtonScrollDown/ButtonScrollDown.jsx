import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import SouthIcon from '@mui/icons-material/South';
import styles from './style.js'
import { scrollDown } from '../../../store/buttonScrollDown/reducer.js';

function ButtonScrollDown() {
  const dispatch = useDispatch();

  const hangleScrollDownClick = () => {
    dispatch(scrollDown())
  }


  return (
    <Button sx={styles} onClick={() => hangleScrollDownClick()} variant="text">
      scroll down
      <SouthIcon />
    </Button>
  );
}

export default ButtonScrollDown;