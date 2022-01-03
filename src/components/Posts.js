import React from "react";
import Post from "./Post";

function Posts({ postsList, deletePost, signedIn }) {
  return (
    <section className="posts">
      {postsList
        ? postsList.map((post) => {
            return (
              <Post
                post={post}
                key={post.id}
                deletePost={deletePost}
                signedIn={signedIn}
              />
            );
          })
        : "Loading..."}
    </section>
  );
}

export default Posts;
