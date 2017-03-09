import React, { Component } from 'react';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Drink Coffee', complete: false },
        { id: 2, text: 'Feed Cat', complete: true },
        { id: 3, text: 'Sleep', complete: false },
      ],
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
