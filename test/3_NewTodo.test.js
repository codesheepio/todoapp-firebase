import React from 'react';
import { shallow } from 'enzyme';
import NewTodo from '../src/components/NewTodo';

describe('3) NewTodo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NewTodo />);
  });
  it('renders <div> correctly', () => {
    expect(wrapper.is('div')).toBe(true);
  });

  it('renders <input> with "text" type inside <div>', () => {
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('input').first().prop('type')).toEqual('text');
  });

  it('renders <button> with "Add" text inside <div>', () => {
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button').first().text()).toBe('Add');
  });
});
