import React from "react";
import { getAuth, signOut } from "firebase/auth";

const Logout: React.FC = () => {
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Handle logout success if needed
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <button onClick={handleLogout}>Sign out</button>
  );
};

export default Logout;
