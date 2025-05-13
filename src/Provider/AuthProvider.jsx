import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../Firebase/firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Sign up new users
    const authSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in a user with an email address and password 
    const authSignInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const allValues = {
        user,
        setUser,
        loading,
        setLoading,
        authSignUp,
        authSignInUser
    }
    return (
        <div>
            <AuthContext.Provider value={allValues}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;