import React from 'react';
import { shallow } from 'enzyme';
import NewTodo from '../src/components/NewTodo';

describe('5) NewTodo', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      addHandler: jest.fn(),
    };
    wrapper = shallow(<NewTodo {...props} />);
  });

  it('contains "text" key in its state', () => {
    expect(typeof wrapper.state('text')).toBe('string');
  });

  it('uses "text" state as value of <input>', () => {
    wrapper.setState({ text: 'Feed Cat' });
    expect(wrapper.find('input').prop('value')).toEqual('Feed Cat');

    wrapper.setState({ text: 'Sleep' });
    expect(wrapper.find('input').prop('value')).toEqual('Sleep');
  });

  it('sets new "text" state when typing', () => {
    wrapper.find('input').simulate('change', { target: { value: 'Feed Cat' } });
    expect(wrapper.state('text')).toEqual('Feed Cat');
  });

  it('calls addHandler with current "text" state on click Add button', () => {
    wrapper.setState({ text: 'Feed Cat' });
    wrapper.find('button').simulate('click');
    expect(props.addHandler).toHaveBeenCalledWith('Feed Cat');
  });

  it('resets "text" state after calling addHandler', () => {
    wrapper.setState({ text: 'Feed Cat' });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('text')).toBe('');
  });
});
