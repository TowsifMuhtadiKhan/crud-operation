import React from 'react';
import ResponsiveAppBar from '../Navbar/Appbar';
import CoverImage from './MainBody/CoverImage';
import ImgMediaCard from './BlogSection/BlogCard';
import Footer from '../Footer/Footer';


function LandingPage() {
  return (
    <>
      <ResponsiveAppBar/>
      <CoverImage/>
      <ImgMediaCard/>
      <Footer/>
    </>  
 
  );
}

export default LandingPage;
