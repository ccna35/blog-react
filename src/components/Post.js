import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth } from "../firebaseConfig";

function Post({ post, deletePost, signedIn }) {
  return (
    <article>
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
    </article>
  );
}

export default Post;
