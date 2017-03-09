import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '../src/components/TodoItem';

describe('1) TodoItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TodoItem text="Drink Coffee" />);
  });
  it('renders <li> correctly', () => {
    expect(wrapper.is('li')).toBe(true);
  });

  it('has class `todo-item`', () => {
    expect(wrapper.hasClass('todo-item')).toBe(true);
  });

  it('shows text from props', () => {
    expect(wrapper.text()).toBe('Drink Coffee');
  });

  it('has class `complete` if a `complete` props is true', () => {
    wrapper.setProps({ complete: true });
    expect(wrapper.hasClass('complete')).toBe(true);
  });
});
