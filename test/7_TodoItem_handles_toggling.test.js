import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '../src/components/TodoItem';

describe('7) TodoItem handles toggling complete', () => {
  it('calls toggleHandler with id on click', () => {
    const props = {
      id: 5,
      text: 'Feed Cat',
      toggleHandler: jest.fn(),
      complete: false,
    };
    const wrapper = shallow(<TodoItem {...props} />);
    expect(props.toggleHandler).not.toHaveBeenCalled();

    wrapper.simulate('click');
    expect(props.toggleHandler).toHaveBeenCalledWith(5);
  });
});
