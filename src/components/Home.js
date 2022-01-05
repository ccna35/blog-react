import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";

function Home({ deletePost, signedIn }) {
  const [postsList, setPostsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const postsCollection = collection(db, "posts");

  useEffect(() => {
    console.log("read 1");
    const unsub = onSnapshot(postsCollection, (snapshot) => {
      let posts = [];

      snapshot.docs.map((doc) => {
        return posts.push({ ...doc.data(), id: doc.id });
      });
      setPostsList(posts);
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <main className="home">
      <div className="container">
        {loading ? (
          "Loading..."
        ) : (
          <Posts
            postsList={postsList}
            deletePost={deletePost}
            signedIn={signedIn}
          />
        )}
      </div>
    </main>
  );
}

export default Home;
