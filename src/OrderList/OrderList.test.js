import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import OrderList from './OrderList.js';

describe('OrderList', () => {
  let wrapper, deleteOrderMock;

  beforeEach(() => {
    deleteOrderMock = jest.fn();
    wrapper = shallow(<OrderList orders={
      [
        { id: 1, img: 'google.com', name: 'Television', price: '200' },
        { id: 2, img: 'facebook.com', name: 'Radio', price: '100' }
      ]
    }
    deleteOrder={deleteOrderMock}/>)
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});