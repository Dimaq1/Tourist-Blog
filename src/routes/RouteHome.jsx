import React from 'react';
import ContentTitle from '../components/ContentTitle';
import Blogs from '../pages/Blogs';
import Background from '../components/Background/Background';

function RouteHome() {
  return (
    <>
      <Background bgImage='./images/bg-home.jpg' />
      <ContentTitle
        title={'Be prepared for the Mountains and beyond!'} />
      <Blogs />
    </>
  );
}

export default RouteHome;