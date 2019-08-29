import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import OrderList from './OrderList.js';

describe('OrderList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<OrderList orders={[]}/>)
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });
});