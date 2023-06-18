import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: [],
  selectedUserId: null,
};

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    selectUser: (state, action) => {
      state.selectedUserId = action.payload;
    },
  },
});
export const { setUserList, selectUser } = userListSlice.actions;
export default userListSlice.reducer;
