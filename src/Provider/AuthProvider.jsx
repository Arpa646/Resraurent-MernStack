import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import app from "./../firebase.init";
import axios from "axios";
//creating context for share data all over the application

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //use loading when action anything it loaded the page
  const [loading, setLoading] = useState(true);
  //create user with email password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //
  const createUserWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  //sign in user with email password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const user = { email: currentUser.email };
        axios
          .post("http://localhost:5000/jwt", user, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((data) => {
            console.log("Response data:", data.data);
            localStorage.setItem("accesToekn", data.data);
            localStorage.setItem("hi",'hgss');
          });
      } 
      else if(!currentUser) {
        localStorage.removeItem("accesToekn");
        localStorage.removeItem("hi");
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  //user info that using all over application

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    createUserWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
