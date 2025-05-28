import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from '../../firebase/firebase_config';

export const  AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = (true);
    const auth = getAuth(app);



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
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

    authData = {
        user,
        createUser,
        singInUser,
        logOutUser,
        loading
    }
    
    return (
       <AuthContext value={auth}>
            { children }
       </AuthContext>
    );
};

export default AuthProvider;