import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' },
  ],
};

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    emptyReducer: (state) => state,
  },
});
export default userListSlice.reducer;
