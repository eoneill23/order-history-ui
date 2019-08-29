import Order from '../Order/Order.js';
import React from 'react';

const OrderList = ({ orders }) => {
  let listOfOrders = orders.map(order => {
    return <Order key={order.id} id={order.id} img={order.img} name={order.name} description={order.description} price={order.price}/>
  })

  return (
    <section>
      {listOfOrders}
    </section>
  )
}

export default OrderList;