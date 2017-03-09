import React from 'react';

const TodoItem = ({ id, text, complete, toggleHandler }) => (
  <li
    className={complete ? 'todo-item complete' : 'todo-item'}
    onClick={() => toggleHandler(id)}
  >
    {text}
  </li>
);

export default TodoItem;
