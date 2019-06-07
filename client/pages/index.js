import React, { useEffect } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";

const Home = () => {
  const { user, isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <div>
      {user ? <div> singed in: { user.username }</div> : <div>signed out.</div>}
      {isLoggedIn && <PostForm />}
      {mainPosts.map((c) => {
        return (
          <PostCard key={c} post={c} />
        );
      })}
    </div>
  );
};

export default Home;