import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Post({ post, deletePost }) {
  return (
    <article>
      <div className="postHeader">
        <h2>{post.title}</h2>{" "}
        <FontAwesomeIcon icon="trash-alt" onClick={() => deletePost(post.id)} />
      </div>
      <div className="published">
        <div>
          Published on{" "}
          <span className="date">
            {post.datePublished.toDate().toDateString()}
          </span>
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
