import React from 'react';
import { addOrder, fetchOrders } from './apiCalls.js';

describe('addOrder', () => {
  let  mockOrder;

  beforeEach(() => {

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockOrder)
      });
    });
  });

  it('should call fetch with the correct URL', () => {
    const expected = ['http://localhost:3001/api/v1/purchases', {
      method: 'POST',
      body: JSON.stringify({...mockOrder}),
      headers: {
        'Content-Type': 'application/json'
      }
    }]
    
    addOrder(mockOrder);

    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });
});

describe('fetchOrders', () => {

  beforeEach(() => {

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockOrder)
        });
      });
  });

  it('should call fetch with the correct URL', () => {
    fetchOrders();

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/purchases')
  });
})