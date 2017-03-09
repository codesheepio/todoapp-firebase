import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import './styles/main.css';

const todos = [
  { id: 1, text: 'Drink Coffee', complete: false },
  { id: 2, text: 'Feed Cat', complete: true },
  { id: 3, text: 'Sleep', complete: false },
];

ReactDOM.render(
  <TodoList todos={todos} />,
  document.getElementById('react-root')
);
