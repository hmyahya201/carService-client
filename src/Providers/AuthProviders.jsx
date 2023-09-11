import React, { createContext, useState } from 'react';
import app from '../firebse/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext()
  const auth = getAuth(app);

const AuthProviders = ({children}) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)
   const createUser =(email, password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const loginUser = (email, password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   } 
   const info = {
      user,
      createUser,
      loginUser,
      loading,
   }
   return (
      <AuthContext.Provider value={info}>
         {
            children
         }
      </AuthContext.Provider>
   );
};

export default AuthProviders;