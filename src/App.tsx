import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import CreatePost from './pages/CreatePost/CreatePost'; // Import your CreatePost component
import ImgMediaCard from './pages/LandingPage/BlogSection/BlogCard';
import EditPost from './pages/EditPost/EditPost';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user/create_post" element={<CreatePost />} />
        <Route path="/" element={<ImgMediaCard />} />
        <Route path="/user/:id/edit_post" element={<EditPost />} />
        
      </Routes>
    </Router>
  );
}

export default App;
