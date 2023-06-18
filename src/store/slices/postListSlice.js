import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postList: [],
};

const postListSlice = createSlice({
  name: 'postList',
  initialState,
  reducers: {
    setPostList: (state, action) => {
      state.postList = action.payload;
    },
  },
});
export const { setPostList } = postListSlice.actions;
export default postListSlice.reducer;
