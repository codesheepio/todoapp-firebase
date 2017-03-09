import React from 'react';
import { mount } from 'enzyme';
import TodoApp from '../src/components/TodoApp';
import NewTodo from '../src/components/NewTodo';
import TodoList from '../src/components/TodoList';

describe('4) TodoApp', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<TodoApp />);
  });

  it('renders <NewTodo> and <TodoList>', () => {
    expect(wrapper.find(NewTodo).exists()).toBe(true);
    expect(wrapper.find(TodoList).exists()).toBe(true);
  });

  it('contains "todos" key as an array in its state', () => {
    expect(wrapper.state().todos instanceof Array).toBe(true);
  });

  it('passes todos state as props of TodoList', () => {
    const state = {
      todos: [
        { id: 1, text: 'Drink Coffee', complete: false },
        { id: 2, text: 'Feed Cat', complete: true },
        { id: 3, text: 'Read a book', complete: false },
      ],
    };
    wrapper.setState(state);
    expect(wrapper.find(TodoList).prop('todos')).toEqual(state.todos);
    expect(wrapper.find(TodoList).prop('todos')).toBe(state.todos);
  });
});
