/** @format */

import React from 'react';
import './TodoList.css';
import { useSelector} from 'react-redux';

export const TodoList = () => {
  //const todoList = useSelector((state) => state.todoList);
  const todoList =[
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
    { id: 3, title: 'Todo 3', completed: false },
  ]  

  return (
    <div className="todo_list">
      <h1>Todos</h1>
      {todoList.map((todo) => (
        <div className="todo" key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.completed ? 'Completed' : 'Not completed'}</p>
        </div>
      ))}
    </div>
  );
  
};
