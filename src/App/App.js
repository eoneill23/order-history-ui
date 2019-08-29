import React, { Component } from 'react';
import OrderList from '../OrderList/OrderList.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount() {

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
