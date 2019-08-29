import React, { Component } from 'react';

class OrderForm extends Component {
  constructor() {
    super();
    this.state = {
      img: '',
      name: '',
      description: '',
      price: ''
    }
  }

  render() {
    return (
      <form className='purchase-form'>
        <input 
          type='text'
          name='img'
          value={this.state.img}
          placeholder='Enter an image URL'
        />
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Enter an order name'
        />
        <input
          type='text'
          name='description'
          value={this.state.description}
          placeholder='Enter an order description'
        />
        <input
          type='text'
          name='price'
          value={this.state.price}
          placeholder='Enter an order price'
        />
        <button>
          Add Purchase
        </button>
      </form>
    )
  }
}

export default OrderForm;