import React, { Component } from 'react';
import NewTodo from './NewTodo';
import TodoList from './TodoList';
import { syncTodos, saveTodos } from '../utils/firebaseHelper';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      loading: true,
    };
    this.addHandler = this.addHandler.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  componentDidMount() {
    syncTodos(todos => {
      this.setState({
        todos,
        loading: false,
      });
    });
  }

  addHandler(text) {
    const newTodos = [
      ...this.state.todos,
      {
        id: this.state.todos.reduce((max, todo) => Math.max(max, todo.id), 0) +
          1,
        text,
        complete: false,
      },
    ];
    saveTodos(newTodos);
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
        {this.state.loading
          ? 'Loading...'
          : <TodoList
              todos={this.state.todos}
              toggleHandler={this.toggleHandler}
            />}
      </div>
    );
  }
}

export default TodoApp;
