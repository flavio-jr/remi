import { isFetching, doneFetching } from '@/domains/common/actions/fetch'

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

export const resetCurrentOrder = () => ({
  type: 'RESET_CURRENT_ORDER'
})

export const fetchOrdersSuccess = orders => ({
  type: 'FETCH_ORDERS_SUCCESS',
  orders: orders
})

export const fetchOrders = OrderService =>
  dispatch => {
    dispatch(isFetching())

    return OrderService
      .list()
      .then(orders => {
        dispatch(doneFetching())

        return dispatch(fetchOrdersSuccess(orders))
      })
  }