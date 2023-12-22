import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import CreatePost from './pages/CreatePost/CreatePost'; 
import ImgMediaCard from './pages/LandingPage/BlogSection/BlogCard';// Import your CreatePost component
import { Edit } from '@mui/icons-material';
import EditPost from './pages/EditPost/EditPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user/create_post" element={<CreatePost />} />
        <Route path="/" element={<ImgMediaCard />} />
        <Route path="/corresponding_user/:userId/edit_post" element={<EditPost />} />
      </Routes>
    </Router>
  );
}

export default App;
