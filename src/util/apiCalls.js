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