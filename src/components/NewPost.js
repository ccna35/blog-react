import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import useStorage from "../hooks/useStorage";
import Progress from "./Progress";

function NewPost({ signedIn }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { progress, url } = useStorage(file);

  const postsCollection = collection(db, "posts");

  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollection, {
      title,
      postText,
      postImage: url,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        photo: auth.currentUser.photoURL,
      },
      datePublished: Timestamp.now(),
    });
    navigate("/");
  };

  const types = ["image/jpeg", "image/png"];

  const imageHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("You must choose a supported file type (png or jpeg)!");
    }
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
              rows="10"
              placeholder="post body..."
              onChange={(e) => {
                setPostText(e.target.value);
              }}
            />
          </div>
          <div className="imageDiv">
            <input type="file" onChange={imageHandler} />
            {error && <p className="imageError">{error}</p>}
            {file && <Progress file={file} />}
          </div>
          <button onClick={createPost}>
            {url ? "Submit Post" : "Wait..."}
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewPost;
