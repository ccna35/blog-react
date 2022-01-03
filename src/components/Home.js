import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

function Home({ deletePost, signedIn }) {
  const [postsList, setPostsList] = useState([]);
  const postsCollection = collection(db, "posts");

  useEffect(() => {
    let isMounted = true;
    const getPosts = async () => {
      const querySnapshot = await getDocs(postsCollection);
      if (isMounted) {
        setPostsList(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }
    };
    getPosts();
    return () => {
      isMounted = false;
    };
  });

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
