import React, { Component } from 'react';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  render() {
    return (
      <div>
        <NewTodo />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoApp;
