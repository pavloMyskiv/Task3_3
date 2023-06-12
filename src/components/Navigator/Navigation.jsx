import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/'}>Posts</NavLink>
        </li>
        <li>
          <NavLink to={'/todoList'}>Todos</NavLink>
        </li>
        <li>
          <NavLink to={'/userList'}>Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};
