import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth } from "../firebaseConfig";

function Post({ post, deletePost, signedIn }) {
  return (
    <article>
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
          <div>
            Published on <span className="date"></span>
          </div>
          <div>
            by
            <span className="author"> {post.author.name}</span>{" "}
            <img src={post.author.photo} alt="author" />
          </div>
        </div>
        <p className="postBody">{post.postText}</p>
      </div>
    </article>
  );
}

export default Post;
