import React from "react";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import { useState } from "react";

export default function SignInSignUp() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const toggleView = () => {
    setIsSignedUp(!isSignedUp);
  };

  return (
    <div>
      {isSignedUp ? (
        <SignIn toggleView={toggleView} />
      ) : (
        <SignUp toggleView={toggleView} />
      )}
    </div>
  );
}
