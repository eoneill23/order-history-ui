import React, { Component } from 'react';
import OrderList from '../OrderList/OrderList.js';
import { fetchOrders } from '../util/apiCalls.js';
import './App.css';

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

  render() {
    return (
      <>
      <header></header>
      <main>
        <OrderList orders={this.state.orders}/>
      </main>
      </>
    )
  }
}

export default App;
