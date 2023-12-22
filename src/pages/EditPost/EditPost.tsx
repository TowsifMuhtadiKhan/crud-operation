// EditPost.tsx
import React from 'react';
import ResponsiveAppBar from '../Navbar/Appbar';
import EditPostBody from './EditPostBody/EditPostBody';
import Footer from '../Footer/Footer';

import { useLocation } from 'react-router-dom';

function EditPost() {
    const { state } = useLocation();
  const { id, title, body } = state;
  return (
    <>
      <ResponsiveAppBar />
      <EditPostBody id={id} title={title} body={body}/>
      <Footer />
    </>
  );
}

export default EditPost;
