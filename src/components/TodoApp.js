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
    this.addHandler = this.addHandler.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  addHandler(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.reduce(
            (max, todo) => Math.max(max, todo.id),
            0
          ) + 1,
          text,
          complete: false,
        },
      ],
    });
  }

  toggleHandler(id) {
    this.setState({
      todos: this.state.todos.map(
        todo =>
          todo.id === id
            ? { id: todo.id, text: todo.text, complete: !todo.complete }
            : todo
      ),
    });
  }

  render() {
    return (
      <div>
        <NewTodo addHandler={this.addHandler} />
        <TodoList todos={this.state.todos} toggleHandler={this.toggleHandler} />
      </div>
    );
  }
}

export default TodoApp;
