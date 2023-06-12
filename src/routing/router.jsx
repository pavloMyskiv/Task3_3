import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import PostList from '../components/PostList';
import TodoList from '../components/TodoList';
import UserList from '../components/UserList';

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { element: <PostList />, index: true },
      { path: '/todoList', element: <TodoList /> },
      { path: '/userList', element: <UserList /> },
    ],
  },
]);
