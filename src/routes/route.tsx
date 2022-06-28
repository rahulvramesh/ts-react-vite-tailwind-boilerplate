import React from 'react';
import { Navigate } from 'react-router-dom';
//@ts-ignore
import { useAuth } from '../contexts/AuthContext';

function RequireAuth({ children }: { children: JSX.Element }) {
  const user: any = useAuth();

  if (user.value.user === null) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default RequireAuth;
