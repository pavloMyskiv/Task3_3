import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import PostList from '../components/PostList';
import TodoList from '../components/TodoList';
import UserList from '../components/UserList';

export const AppRoutes = {
  PostList:'/',
  TodoList:'/todoList',
  UserList:'/userList',
}

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { element: <PostList />, index: true },
      { path: AppRoutes.TodoList, element: <TodoList /> },
      { path: AppRoutes.UserList, element: <UserList /> },
    ],
  },
]);
