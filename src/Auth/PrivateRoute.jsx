import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../Components/Spinner';

const PrivateRoute = ({ children }) => {
  const location = useLocation()

  const { user,loading } = use(AuthContext)
  if (loading) {
    return <Spinner/>
  }
  if (!user) {
    return <Navigate to='/login' state={location.pathname}></Navigate>
  }
  return children 
}
export default PrivateRoute;