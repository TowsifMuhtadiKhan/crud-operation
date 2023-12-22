import React from 'react';
import ResponsiveAppBar from '../Navbar/Appbar';
import EditPostBody from './EditPostBody/EditPostBody';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';



function EditPost() {
  return (
    <>
   <ResponsiveAppBar/>

   <Footer/>
    </>
  );
}

export default EditPost;