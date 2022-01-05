import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <div className="homepageArticle">
      <div className="postImageContainer">
        <img src={post.postImage} alt="Post" />
      </div>
      <div className="postBodyContainer">
        <div className="postHeader">
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
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
      </div>
    </div>
  );
}

export default Post;
