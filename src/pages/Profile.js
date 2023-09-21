// Profile.js

import React, { useContext } from 'react';
import { AuthContext } from '../components/auth/AuthContext';

const Profile = () => {
  const { userProfile } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome to your Profile, {userProfile.firstName}!</h1>
      <p>Here's your user information:</p>
      <ul>
        <li>First Name: {userProfile.firstName}</li>
        <li>Last Name: {userProfile.lastName}</li>
        <li>Email: {userProfile.email}</li>
        <li>User ID: {userProfile.userId}</li>
      </ul>
    </div>
  );
};

export default Profile;
