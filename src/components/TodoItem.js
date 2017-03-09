import React from 'react';

const TodoItem = ({ text, complete }) => (
  <li className={complete ? 'todo-item complete' : 'todo-item'}>{text}</li>
);

export default TodoItem;
