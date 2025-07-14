import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, allowedRole }) {
  const email = localStorage.getItem("loggedInEmail");
  const role = localStorage.getItem("userRole");

  if (!email || !role) {
    return <Navigate to="/login" replace />;
  }

  if (role !== allowedRole) {
    return <Navigate to={`/${role}/dashboard`} replace />;
  }

  return children;
}

export default PrivateRoute;
