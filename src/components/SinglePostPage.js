import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth, db } from "../firebaseConfig";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

function SinglePostPage({ signedIn, deletePost }) {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const docRef = doc(db, "posts", id);

  useEffect(() => {
    getDoc(docRef).then((doc) => {
      setPost({ ...doc.data(), id: doc.id });
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className="container">Loading...</div>
      ) : (
        <article>
          <div className="container">
            <div className="postImageContainer">
              <img src={post.postImage} alt="Post" />
            </div>
            <div className="postBodyContainer">
              <div className="postHeader">
                <h2>{post.title}</h2>

                {signedIn && auth.currentUser.uid === post.author.id && (
                  <FontAwesomeIcon
                    icon="trash-alt"
                    onClick={() => deletePost(post.id)}
                    className="trashIcon"
                  />
                )}
              </div>
              <div className="published">
                <img src={post.author.photo} alt="author" />
                <div>
                  <div>
                    Published on{" "}
                    <span className="date">
                      {post.datePublished.toDate().toDateString()}
                    </span>
                  </div>
                  <div>
                    by
                    <span className="author"> {post.author.name}</span>{" "}
                  </div>
                </div>
              </div>
              <p className="postBody">{post.postText}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default SinglePostPage;
