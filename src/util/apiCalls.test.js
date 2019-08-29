import React from 'react';
import { addOrder } from './apiCalls.js';

describe('addOrder', () => {
  let  mockOrder;

  beforeEach(() => {
    JSON.stringify(mockOrder = { id: 1, img: 'google.com', name: 'Television', price: '200' }),

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