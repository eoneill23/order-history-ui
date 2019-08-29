import React from 'react';
import './Order.css'

const Order = ({ id, img, name, description, price }) => {

  return (
    <article className='order'>
      <img src={img} alt='Image of a placed order' className='order-img'></img>
      <div>
      <h3>{name}</h3>
      <p>{description}</p>
      </div>
      <p className='price'>${price}</p>
    </article>
  )
}

export default Order;