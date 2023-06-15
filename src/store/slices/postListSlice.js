/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postList: [
    { id: 1, title: 'Post 1', body: 'This is the body of post 1.' },
    { id: 2, title: 'Post 2', body: 'This is the body of post 2.' },
    { id: 3, title: 'Post 3', body: 'This is the body of post 3.' },
  ],
};

const postListSlice = createSlice({
  name: 'postList',
  postList: [
    { id: 1, title: 'Post 1', body: 'This is the body of post 1.' },
    { id: 2, title: 'Post 2', body: 'This is the body of post 2.' },
    { id: 3, title: 'Post 3', body: 'This is the body of post 3.' },
  ],
  reducer: {
    emptyReducer: (state, action) => {
      return state;
    },
  },
});
export const postListReducer  =  postListSlice.reducer;
