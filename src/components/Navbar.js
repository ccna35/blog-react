import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Navbar({ signedIn, setSignedIn }) {
  const [active, setActive] = useState(false);

  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setSignedIn(false);
      navigate("login");
    });
  };

  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="brand">BLOGX</div>
          <ul className={`navMenu ${active && "active"}`}>
            <li className={`navMenuItem ${active && "active"}`}>
              <Link to="/">Home</Link>
            </li>
            {signedIn && (
              <li className={`navMenuItem ${active && "active"}`}>
                <Link to="/newpost">Create New Post</Link>
              </li>
            )}
            {!signedIn && (
              <li className={`navMenuItem ${active && "active"}`}>
                <Link to="/login">Login</Link>
              </li>
            )}
            {signedIn && (
              <li
                className={`navMenuItem ${active && "active"}`}
                onClick={signUserOut}
              >
                Sign out
              </li>
            )}
          </ul>
          <div
            className={`burgerMenu ${active && "active"}`}
            onClick={() => setActive(!active)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
