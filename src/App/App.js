import React, { Component } from 'react';
import OrderList from '../OrderList/OrderList.js';
import OrderForm from '../OrderForm/OrderForm.js';
import { fetchOrders, addOrder, removeOrder } from '../util/apiCalls.js';
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
    this.setState({orders: [...this.state.orders, newOrder]});
    addOrder(newOrder)
    .catch(error => this.setState({ error: 'There was an issue adding your order.'}))
  }

  deleteOrder = (id) => {
    let filteredOrders = this.state.orders.filter(order => order.id !== id)
    removeOrder(id)
    .catch(error => this.setState({ error: 'There was an issue deleting your order'}))
    this.setState({orders: filteredOrders});
  }

  render() {
    return (
      <>
      <header>
        <h1>My order history</h1>
        <OrderForm addOrder={this.addOrder}/>
      </header>
      <main className='purchase-container'>
        <OrderList orders={this.state.orders} deleteOrder={this.deleteOrder}/>
      </main>
      </>
    )
  }
}

export default App;
