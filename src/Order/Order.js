import React from 'react';
import './Order.css'

const Order = ({ id, img, name, description, price, deleteOrder }) => {

  return (
    <article className='order'>
      <img src={img} alt='Image of a placed order' className='order-img'></img>
      <div className='content-wrapper'>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className='button-wrapper'>
        <p className='price'>${price}</p>
        <button className='order-btn' onClick={() => deleteOrder(id)}>Remove From History</button>
      </div>
    </article>
  )
}

export default Order;