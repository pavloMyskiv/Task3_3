
import { combineReducers } from '@reduxjs/toolkit';
//import todoListReducer from './slices/todoListSlice';
import {postListReducer as reducer} from './slices/postListSlice';
//import userListReducer from './slices/userListSlice';

const rootReducer = combineReducers({
 // todoList: todoListReducer,
  postList: reducer,
 // userList: userListReducer,
});

export default rootReducer;
