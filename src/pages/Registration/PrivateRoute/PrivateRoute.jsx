import React, { Children } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
   const { user, loading } = useAuth();

   if(loading) {
    return <p className='text-center'>Loading.....</p>
   }

   if(user){
    return children;
   }

  return <Navigate to="/login" />;
}

export default PrivateRoute;
