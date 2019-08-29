export const fetchOrders = () => {
  return fetch('http://localhost:3001/api/v1/purchases')
  .then(response => {
    if(!response.ok) {
      throw Error ('There was an error getting your orders.');
    }
    return response.json();
  })
  .catch(error => {
    throw Error(error.message)
  })
}

export const addOrder = (newOrder) => {
  console.log(newOrder)
  const options = {
    method: 'POST',
    body: JSON.stringify({...newOrder}),
    headers: {
      'Content-type': 'application/json'
    }
  }
  return fetch('http://localhost:3001/api/v1/purchases', options)
  .then(response => {
    if (!response.ok) {
      throw Error('There was an issue adding your order.')
    }
    return response.json();
  })
  .catch(error => {
    throw Error('There was an issue adding your order.')
  })
}