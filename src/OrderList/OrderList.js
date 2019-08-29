import Order from '../Order/Order.js';
import './OrderList.css';
import React from 'react';

const OrderList = ({ orders }) => {
  let listOfOrders = orders.map(order => {
    return <Order key={order.id} id={order.id} img={order.img} name={order.name} description={order.description} price={order.price}/>
  })

  return (
    <section className='order-section'>
      {listOfOrders}
    </section>
  )
}

export default OrderList;