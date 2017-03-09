import React from 'react';
import { mount } from 'enzyme';
import TodoApp from '../src/components/TodoApp';
import TodoItem from '../src/components/TodoItem';

describe('8) TodoApp changes items complete state', () => {
  it('toggles complete status', () => {
    const wrapper = mount(<TodoApp />);
    const state = {
      todos: [
        { id: 1, text: 'Drink Coffee', complete: false },
        { id: 2, text: 'Feed Cat', complete: true },
        { id: 3, text: 'Read a book', complete: false },
      ],
    };
    wrapper.setState(state);

    const firstTodo = wrapper.find('#todo-1');
    firstTodo.simulate('click');

    expect(wrapper.state('todos')).toEqual([
      { id: 1, text: 'Drink Coffee', complete: true },
      { id: 2, text: 'Feed Cat', complete: true },
      { id: 3, text: 'Read a book', complete: false },
    ]);
    expect(wrapper.state('todos')).not.toBe(state.todos);
  });
});
