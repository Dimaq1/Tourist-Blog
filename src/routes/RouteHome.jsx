import React from 'react';
import ContentTitle from '../pages/ContentTitle';
import Blogs from '../pages/Blogs';
import Background from '../components/common/Background/Background';

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