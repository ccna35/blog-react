import React from "react";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setSignedIn }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("signedIn", true);
      setSignedIn(true);
      navigate("/");
    });
  };
  return (
    <section className="login">
      <div className="container">
        <div className="loginContainer">
          <h2>Sign in to publish a new post or manage old posts!</h2>
          <div className="loginBtn" onClick={signInWithGoogle}>
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="google"
            />
            <span>Sign in with Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
