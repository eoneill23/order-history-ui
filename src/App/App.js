import React, { Component } from 'react';
import OrderList from '../OrderList/OrderList.js';
import OrderForm from '../OrderForm/OrderForm.js';
import { fetchOrders } from '../util/apiCalls.js';
import './App.css';
import Order from '../Order/Order.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      err: ''
    }
  }

  componentDidMount() {
    fetchOrders()
    .then(data => this.setState({orders: data}))
    .catch(error => {
      this.setState({err: 'There was an error getting your orders.'})
    })
  }

  addOrder = (newOrder) => {
    console.log(newOrder)
  }

  render() {
    return (
      <>
      <header>
        <h1>My order history</h1>
        <OrderForm addOrder={this.addOrder}/>
      </header>
      <main className='purchase-container'>
        <OrderList orders={this.state.orders}/>
      </main>
      </>
    )
  }
}

export default App;
