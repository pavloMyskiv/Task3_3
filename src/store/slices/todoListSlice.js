import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
    { id: 3, title: 'Todo 3', completed: false },
  ],
};

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    emptyReducer: (state) => state,
  },
});
export default todoListSlice.reducer;
