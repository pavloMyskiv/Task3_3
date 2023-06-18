import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
};

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = action.payload;
    },
  },
});
export const { setTodoList } = todoListSlice.actions;
export default todoListSlice.reducer;
