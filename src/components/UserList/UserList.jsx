import React from 'react';
import './UserList.css';
import { useSelector } from 'react-redux';

export const UserList = () => {
  const userList = useSelector((state) => state.userList);

  return (
    <div className='user_list'>
      <h1>Users</h1>
      {userList.map((user) => (
        <div className='user' key={user.id}>
          <h2>{user.name}</h2>
          <p><span>Email:</span> {user.email}</p>
        </div>
      ))}
    </div>
  );
};
