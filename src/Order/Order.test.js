import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Order from './Order.js';

describe('Order', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Order />)
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });
});