import React from 'react';
import './style.scss'

function BacgroundMain() {
  return (
    <div className='bg-wrapp'>
      <img className='bg-wrapp__img' src="../../public/images/bg-home.jpg" alt="" />
      <img className='bg-wrapp__hero' src="../../public/images/bg-hero.png" alt="" />
    </div>
  );
}

export default BacgroundMain;