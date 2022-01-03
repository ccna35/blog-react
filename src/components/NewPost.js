import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";

function NewPost({ signedIn }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollection = collection(db, "posts");

  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollection, {
      title,
      postText,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        photo: auth.currentUser.photoURL,
      },
      datePublished: Timestamp.now(),
    });
    navigate("/");
  };

  useEffect(() => {
    if (!signedIn) {
      navigate("/login");
    }
  }, [navigate, signedIn]);

  return (
    <section className="newpost">
      <div className="container">
        <div className="newPostContainer">
          <h2>Create a new post here!</h2>
          <div className="inputGroup">
            <input
              type="text"
              placeholder="post title..."
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="inputGroup">
            <textarea
              type="text"
              placeholder="post body..."
              onChange={(e) => {
                setPostText(e.target.value);
              }}
            />
          </div>
          <button onClick={createPost}>Submit Post</button>
        </div>
      </div>
    </section>
  );
}

export default NewPost;
