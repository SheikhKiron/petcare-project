import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const[loading,setLoading]=useState(true)
  const signUp = (email, password) => {
    setLoading(true)
return createUserWithEmailAndPassword(auth,email,password)
  }

  const googleSignIn = () => {
     setLoading(true);
   return signInWithPopup(auth,googleProvider)
  }

  const signIn = (email, password) => {
     setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  
  const forget = (email) => {
     setLoading(true);
   return sendPasswordResetEmail(auth,email);
  };
  const verify = (user) => {
     setLoading(true);
    return sendEmailVerification(user)
  }

  const logOut = () => {
     setLoading(true);
  return signOut(auth)
  }

  const updateProfileFun = (displayName,photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL
    })
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    });
    return ()=>{unSubscribe()}
  },[])

  const authData = {
    signUp,
    signIn,
    googleSignIn,
    forget,
    verify,
    user,
    setUser,
    logOut,
    loading,
    setLoading,
    updateProfileFun,
  };
  return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;