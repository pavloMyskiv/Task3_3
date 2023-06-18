import React, { useEffect } from 'react';
import './UserList.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUserList, selectUser } from '../../store/slices/userListSlice.js';

export const UserList = () => {
  const userList = useSelector((state) => state.userList.userList);
  const selectedUserId = useSelector((state) => state.userList.selectedUserId);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      dispatch(setUserList(response.data));
    });
  });

  return (
    <div className="user_list">
      <h1>Users</h1>
      {userList.map((user) => (
        <div
          className={user.id == selectedUserId ? 'user selected_user' : 'user'}
          key={user.id}
        >
          <div className="user_info">
            <h2>{user.username}</h2>
            <p>
              <span>Name:</span> {user.name}
            </p>
          </div>
          <button
            data-user-id={user.id}
            onClick={(event) => {
              dispatch(selectUser(event.target.dataset.userId));
            }}
          >
            Select
          </button>
        </div>
      ))}
    </div>
  );
};
