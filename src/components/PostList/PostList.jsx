import React, { useEffect } from 'react';
import './PostList.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setPostList } from '../../store/slices/postListSlice';

export const PostList = () => {
  const postList = useSelector((state) => state.postList.postList);
  const selectedUserId = useSelector((state) => state.userList.selectedUserId);
  const dispatch = useDispatch();
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts').then((response) => {
      dispatch(setPostList(response.data));
    });
  });
  const selectedUserPosts = postList.filter(
    (post) => post.userId == selectedUserId
  );
  return (
    <div className="post_list">
      <h1>Posts</h1>
      {selectedUserPosts.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
