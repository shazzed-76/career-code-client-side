import React, { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from '../../firebase/firebase_config';

export const  AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
   
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserInfo = (userData) => {
        return updateProfile(auth.currentUser, userData)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser)
            }
            setLoading(false)
        });

        return () => unSubscribe()
    }, [])

    const authData = {
      user,
      setUser,
      createUser,
      singInUser,
      logOutUser,
      loading,
      updateUserInfo,
      signInWithGoogle,
    };
    
    return (
       <AuthContext value={authData}>
            { children }
       </AuthContext>
    );
};

export default AuthProvider;