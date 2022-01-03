import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewPost from "./components/NewPost";
import Login from "./components/Login";
import SignOut from "./components/SignOut";
import "./CSS/style.css";
import { useState } from "react";
import {
  faCheckSquare,
  faCoffee,
  faTrash,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";

library.add(faCheckSquare, faCoffee, faTrash, faTrashAlt);

function App() {
  const [signedIn, setSignedIn] = useState(localStorage.getItem("signedIn"));

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="App">
      <Router>
        <Navbar signedIn={signedIn} setSignedIn={setSignedIn} />
        <Routes>
          <Route
            path="/"
            element={<Home deletePost={deletePost} signedIn={signedIn} />}
          />
          <Route path="/newpost" element={<NewPost signedIn={signedIn} />} />
          <Route path="/login" element={<Login setSignedIn={setSignedIn} />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
