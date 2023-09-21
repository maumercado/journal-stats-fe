import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ path, ...props }) => {
  const { userProfile } = useContext(AuthContext);

  return userProfile ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
