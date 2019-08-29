import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import OrderForm from './OrderForm.js';

describe('OrderForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<OrderForm />)
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });
});