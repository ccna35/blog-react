import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";

function Home({ deletePost, signedIn }) {
  const [postsList, setPostsList] = useState([]);
  const postsCollection = collection(db, "posts");

  useEffect(() => {
    console.log("read 1");
    const unsub = onSnapshot(postsCollection, (snapshot) => {
      let posts = [];

      snapshot.docs.map((doc) => {
        return posts.push({ ...doc.data(), id: doc.id });
      });
      setPostsList(posts);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <main className="home">
      <div className="container">
        <Posts
          postsList={postsList}
          deletePost={deletePost}
          signedIn={signedIn}
        />
      </div>
    </main>
  );
}

export default Home;
