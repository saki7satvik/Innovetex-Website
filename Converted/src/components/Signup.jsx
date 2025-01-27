import React from "react";
import { auth, provider, signInWithPopup } from "../firebase/firebase";

function App() {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      alert(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };

  return (
    <div className="App">
      <h1>Firebase Google Sign-In</h1>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
}

export default App;
