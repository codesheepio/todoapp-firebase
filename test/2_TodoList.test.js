import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../src/components/TodoList';
import TodoItem from '../src/components/TodoItem';

describe('2) TodoList', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      todos: [
        { id: 1, text: 'Drink Coffee', complete: false },
        { id: 2, text: 'Feed Cat', complete: true },
        { id: 3, text: 'Read a book', complete: false },
      ],
    };
    wrapper = shallow(<TodoList todos={props.todos} />);
  });

  it('renders <ul> correctly', () => {
    expect(wrapper.is('ul')).toBe(true);
  });

  it('shows all TodoItem', () => {
    expect(wrapper.find(TodoItem).length).toBe(props.todos.length);
  });
});
