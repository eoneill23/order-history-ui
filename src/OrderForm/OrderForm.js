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

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  createOrder = (e) => {
    e.preventDefault();
    let newOrder = {
      id: Date.now(),
      ...this.state
    }
    this.props.addOrder(newOrder);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      img: '',
      name: '',
      description: '',
      price: ''
    })
  }

  render() {
    return (
      <form className='purchase-form'>
        <input 
          type='text'
          name='img'
          value={this.state.img}
          placeholder='Enter an image URL'
          onChange={this.handleInputChange}
        />
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Enter an order name'
          onChange={this.handleInputChange}
        />
        <input
          type='text'
          name='description'
          value={this.state.description}
          placeholder='Enter an order description'
          onChange={this.handleInputChange}
        />
        <input
          type='text'
          name='price'
          value={this.state.price}
          placeholder='Enter an order price'
          onChange={this.handleInputChange}
        />
        <button onClick={(e) => this.createOrder(e)}>
          Add Purchase
        </button>
      </form>
    )
  }
}

export default OrderForm;