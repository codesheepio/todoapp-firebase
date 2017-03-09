import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleHandler }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem key={todo.id} {...todo} toggleHandler={toggleHandler} />
    ))}
  </ul>
);

export default TodoList;
