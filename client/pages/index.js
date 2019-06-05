import React from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 'ellysalley', 
    },
    content: 'first tweet'
  }]
};

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((c) => {
        return (
          <PostCard key={c} />
        );
      })}
    </div>
  );
};

export default Home;