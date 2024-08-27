// src/App.js

import React from 'react';
import UserProfile from './components/UserProfile';
import './App.css'; // Import CSS file for centering

const App = () => {
  return (
    <div className="app-container">
      <h1>User Profile Page</h1>
      <UserProfile
        name="Deepika"
        email="deepikar.22it@kongu.edu"
        bio="Currently pursuing B.Tech in IT at Kongu Engineering College"
        avatarUrl="https://th.bing.com/th/id/R.549ba990dbce6b8deca9641ac5d6d217?rik=vFh9njMknJyEMg&riu=http%3a%2f%2fcliparts.co%2fcliparts%2fyck%2fAgx%2fyckAgx95i.png&ehk=NBmgo7tXzr9tJxA2Ly1DDOnx%2fEECL%2f8INO8jAwfL6jQ%3d&risl=&pid=ImgRaw&r=0"
        linkedinUrl="https://www.linkedin.com/in/deepikarajasundar"  // Replace with your LinkedIn profile URL
      />
    </div>
  );
};

export default App;
