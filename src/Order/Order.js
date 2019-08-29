import React from 'react';

const Order = ({ id, img, name, description, price }) => {

  return (
    <article>
      <img src={img} alt='Image of a placed order'></img>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </article>
  )
}

export default Order;