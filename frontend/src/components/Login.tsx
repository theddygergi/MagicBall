import React, { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import "./Login.css";

const Login: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const handleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Error signing in: ", error);
      });
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>Sign out</button>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
    </div>
  );
};

export default Login;
