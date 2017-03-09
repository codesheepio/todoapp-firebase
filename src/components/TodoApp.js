import React, { Component } from 'react';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <NewTodo />
        <TodoList />
      </div>
    );
  }
}

export default TodoApp;
