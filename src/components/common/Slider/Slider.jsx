import React from 'react';
import './style.scss'
import { Button } from '@mui/material';

function Slider() {
  return (
    <div className='slider'>
      <Button className='slider__button'>Start</Button>
      <Button className='slider__button'>01</Button>
      <Button className='slider__button'>02</Button>
      <Button className='slider__button'>03</Button>
    </div>
  );
}

export default Slider;