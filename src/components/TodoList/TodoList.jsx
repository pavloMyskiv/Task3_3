import React, { useEffect } from 'react';
import './TodoList.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setTodoList } from '../../store/slices/todoListSlice';

export const TodoList = () => {
  const todoList = useSelector((state) => state.todoList.todoList);
  const selectedUserId = useSelector((state) => state.userList.selectedUserId);
  const dispatch = useDispatch();
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos').then((response) => {
      dispatch(setTodoList(response.data));
    });
  });
  const selectedUserTodos = todoList.filter(
    (todo) => todo.userId == selectedUserId
  );
  return (
    <div className="todo_list">
      <h1>Todos</h1>
      {selectedUserTodos.map((todo) => (
        <div className="todo" key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.completed ? 'Completed' : 'Not completed'}</p>
        </div>
      ))}
    </div>
  );
};
