export const addToOrder = id => ({
  type: 'ADD_TO_ORDER',
  id: id
})

export const removeFromOrder = id => ({
  type: 'REMOVE_FROM_ORDER',
  id: id
})

export const changeOrderItemAmount = (id, amount) => ({
  type: 'CHANGE_ORDER_ITEM_AMOUNT',
  id: id,
  amount: amount
})