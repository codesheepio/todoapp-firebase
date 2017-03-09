import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './components/TodoItem';
import './styles/main.css';

ReactDOM.render(
  <TodoItem text="Feed Cat" complete />,
  document.getElementById('react-root')
);
