import React from 'react';
import { mount } from 'enzyme';
import TodoApp from '../src/components/TodoApp';

describe('6) TodoApp adds new todo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<TodoApp />);
  });

  it('adds new todo to its state', () => {
    const state = {
      todos: [
        { id: 1, text: 'Drink Coffee', complete: false },
        { id: 2, text: 'Feed Cat', complete: true },
      ],
    };
    wrapper.setState(state);
    wrapper.find('input').simulate('change', { target: { value: 'Sleep' } });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('todos')).toEqual([
      { id: 1, text: 'Drink Coffee', complete: false },
      { id: 2, text: 'Feed Cat', complete: true },
      { id: 3, text: 'Sleep', complete: false },
    ]);
  });
});
