import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
 let wrapper, mockOrder, mockOrder2;

  beforeEach(() => {
    wrapper = shallow(<App />)
    mockOrder = { id: 1, img: 'google.com', name: 'Television', price: '200' }
    mockOrder2 = { id: 2, img: 'facebook.com', name: 'Radio', price: '100' }
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toBe(1)
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should add an order when addOrder is invoked', () => {
    const expected = [mockOrder]
    expect(wrapper.state('orders')).toEqual([]);

    wrapper.instance().addOrder(mockOrder);

    expect(wrapper.state('orders')).toEqual(expected)
  });

  it('should delete an order when deleteOrder is invoked', () => {
    const expected = [mockOrder2];
    expect(wrapper.state('orders')).toEqual([]);

    wrapper.instance().addOrder(mockOrder);
    wrapper.instance().addOrder(mockOrder2);

    wrapper.instance().deleteOrder(1);

    expect(wrapper.state('orders')).toEqual(expected);
  });
});

