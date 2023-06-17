import React from 'react';
import './PostList.css';
import { useSelector } from 'react-redux';

export const PostList = () => {
  const postList = useSelector((state) => state.postList.postList);

  return (
    <div className="post_list">
      <h1>Posts</h1>
      {postList.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
