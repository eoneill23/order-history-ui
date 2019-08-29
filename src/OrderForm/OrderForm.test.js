import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import OrderForm from './OrderForm.js';

describe('OrderForm', () => {
  let wrapper, addOrderMock;

  beforeEach(() => {
    addOrderMock = jest.fn();
    wrapper = shallow(<OrderForm addOrder={addOrderMock}/>)
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when change is detected in the img input', () => {
    const e = { target: { name: 'img', value: 'twitter.com' } };

    wrapper.find('input').at(0).simulate('change', e);

    expect(wrapper.state('img')).toEqual('twitter.com')
  });

  it('should update state when change is detected in the name input', () => {
    const e = {target: {name: 'name', value: 'bike'}};

    wrapper.find('input').at(0).simulate('change', e);

    expect(wrapper.state('name')).toEqual('bike')
  });

  it('should update state when change is detected in the description input', () => {
    const e = { target: { name: 'description', value: 'fast bike' } };

    wrapper.find('input').at(0).simulate('change', e);

    expect(wrapper.state('description')).toEqual('fast bike')
  });

  it('should update state when change is detected in the price input', () => {
    const e = { target: { name: 'price', value: '200' } };

    wrapper.find('input').at(0).simulate('change', e);

    expect(wrapper.state('price')).toEqual('200')
  });

  it('should fire the createOrder method when the button is clicked', () => {
    const e = {preventDefault: jest.fn()};

    wrapper.find('button').simulate('click', e);

    expect(addOrderMock).toHaveBeenCalled();
  });

  it('should fire the clearInputs method when the button is clicked', () => {
    const e = { preventDefault: jest.fn() };
    wrapper.instance().clearInputs = jest.fn()

    wrapper.find('button').simulate('click', e);

    expect(wrapper.instance().clearInputs).toHaveBeenCalled();
  });
});