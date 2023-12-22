import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import CreatePost from './pages/CreatePost/CreatePost'; // Import your CreatePost component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user/create_post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
