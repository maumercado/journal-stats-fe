// PublicRoute.js

import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PublicRoute = ({ path, ...props }) => {
  const { userProfile } = useContext(AuthContext);

  return !userProfile ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PublicRoute;
