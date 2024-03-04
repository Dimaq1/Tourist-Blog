import React from 'react';
import About from '../pages/About';
import Background from '../components/common/Background/Background';

function RouteAbout() {
  return (
    <>
      <Background bgImage={'./images/bg-about.jpg'} />
      <About />
    </>
  );
}

export default RouteAbout;