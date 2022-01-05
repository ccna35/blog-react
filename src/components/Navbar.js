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
    setActive(false);
  };

  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="brand">BLOGX</div>
          <ul className={`navMenu ${active && "active"}`}>
            <Link to="/">
              <li
                className={`navMenuItem ${active && "active"}`}
                onClick={() => setActive(false)}
              >
                Home
              </li>
            </Link>
            {signedIn && (
              <Link to="/newpost">
                <li
                  className={`navMenuItem ${active && "active"}`}
                  onClick={() => setActive(false)}
                >
                  Create New Post
                </li>
              </Link>
            )}
            {!signedIn && (
              <Link to="/login">
                <li
                  className={`navMenuItem ${active && "active"}`}
                  onClick={() => setActive(false)}
                >
                  Login
                </li>
              </Link>
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
