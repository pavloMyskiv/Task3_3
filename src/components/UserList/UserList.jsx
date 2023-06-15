import React from 'react';
import './UserList.css';
import { useSelector } from 'react-redux';

export const UserList = () => {
  const userList = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' },
  ];
  return (
    <div className="user_list">
      <h1>Users</h1>
      {userList.map((user) => (
        <div className="user" key={user.id}>
          <h2>{user.name}</h2>
          <p>
            <span>Email:</span> {user.email}
          </p>
        </div>
      ))}
    </div>
  );
};
