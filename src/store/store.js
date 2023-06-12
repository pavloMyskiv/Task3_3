import { createStore } from 'redux';
import rootReducer from './rootReducer';

const initialState = {
  postList: [
    { id: 1, title: 'Post 1', body: 'This is the body of post 1.' },
    { id: 2, title: 'Post 2', body: 'This is the body of post 2.' },
    { id: 3, title: 'Post 3', body: 'This is the body of post 3.' },
  ],
  todoList: [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
    { id: 3, title: 'Todo 3', completed: false },
  ],
  userList: [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' },
  ],
};

const store = createStore(rootReducer, initialState);

export default store;
