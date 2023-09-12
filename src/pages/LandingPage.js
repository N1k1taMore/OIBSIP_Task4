import React from 'react';
import Navbar from '../components/Navbar';
import Body from '../components/Body';
import blobLeft from '../assets/blobLeft.png';
import blobRight from '../assets/blobRight.png';

const LandingPage = () => {
  return (
    <>
      <img
        className=" Image1"
        src={blobLeft}
        alt="blob-left"
      />
      <img
        className="Image2"
        src={blobRight}
        alt="blob-right"
      />
      <Navbar />
      <Body />
    </>
  );
};

export default LandingPage;
