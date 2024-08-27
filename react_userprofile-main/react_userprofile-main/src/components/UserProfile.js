// src/components/UserProfile.js

import React from 'react';
import PropTypes from 'prop-types';
import './UserProfile.css'; // Ensure this path is correct

const UserProfile = ({ name, email, bio, avatarUrl, linkedinUrl }) => {
  return (
    <div className="user-profile">
      <img src={avatarUrl} alt={`${name}'s avatar`} className="avatar" />
      <h1 className="name">{name}</h1>
      <p className="email">{email}</p>
      <p className="bio">{bio}</p>
      <p className="linkedin-info">
        Contact me on LinkedIn: <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
      </p>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string,
  avatarUrl: PropTypes.string,
  linkedinUrl: PropTypes.string
};

UserProfile.defaultProps = {
  bio: 'Currently pursuing B.Tech in IT at Kongu Engineering College',
  avatarUrl: 'https://via.placeholder.com/150',
  linkedinUrl: '#'
};

export default UserProfile;
