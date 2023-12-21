import React from 'react';
import ResponsiveAppBar from '../Navbar/Appbar';
import CoverImage from './MainBody/CoverImage';
import ImgMediaCard from './BlogSection/BlogCard';


function LandingPage() {
  return (
    <>
      <ResponsiveAppBar/>
      <CoverImage/>
      <ImgMediaCard/>
    </>  
 
  );
}

export default LandingPage;
