import React from 'react';
import { shallow } from 'enzyme';
import Order from './Order.js';

describe('Order', () => {
  let wrapper, deleteOrderMock;

  beforeEach(() => {
    deleteOrderMock = jest.fn();
    wrapper = shallow(<Order id={1} img={'twitter.com'} name={'stereo'} description={'cool stereo'} price={'200'} deleteOrder={deleteOrderMock}/>)
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fire the deleteOrder method when the button is clicked', () => {
    wrapper.find('button').simulate('click');

    expect(deleteOrderMock).toHaveBeenCalled();
  });
});