import React, { Component } from 'react';

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <div>
        <input type="text" />
        <button>Add</button>
      </div>
    );
  }
}

export default NewTodo;
