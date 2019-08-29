import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
 let wrapper, mockOrder;

  beforeEach(() => {
    wrapper = shallow(<App />)
    mockOrder = {id: 1, img: 'google.com', name: 'Television', price: '200'}
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toBe(1)
  });

  it('should add an order when addOrder is invoked', () => {
    const expected = [mockOrder]
    expect(wrapper.state('orders')).toEqual([]);

    wrapper.instance().addOrder(mockOrder);

    expect(wrapper.state('orders')).toEqual(expected)
  });
});

