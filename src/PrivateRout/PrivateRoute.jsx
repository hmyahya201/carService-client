import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext)
   if(loading){
      return <div className='grid place-items-center'><span className="loading loading-infinity loading-lg"></span></div>
   }
  if(user?.email){
   return children
  }
   return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;