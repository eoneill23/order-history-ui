import React, { Component } from 'react';
import OrderList from '../OrderList/OrderList.js';
// import { fetchOrders } from '../util/apiCalls.js';
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
    fetch('http://localhost:3001/api/v1/purchases')
    .then(res => res.json())
    .then(data => this.setState({orders: data}))
    .catch(err => {
      this.setState({err: 'There was an issue getting your orders.'})
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
