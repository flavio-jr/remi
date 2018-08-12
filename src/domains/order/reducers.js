import reducerRegister from '@/support/utils/reducer/register'

const findOrderById = id => orderItem => orderItem.id === id

const findOrder = (state, id) => state.find(findOrderById(id))
const findOrderIndex = (state, id) => state.findIndex(findOrderById(id))

const reducers = {
  'ADD_TO_ORDER': (state, action) => {
    if (findOrder(state, action.id)) {
      return state
    }

    return [
      ...state,
      {
        id: action.id,
        amount: 1
      }
    ]
  },
  'REMOVE_FROM_ORDER': (state, action) => {
    const orderItemIdx = findOrderIndex(state, action.id)

    if (orderItemIdx === -1) {
      return state
    }

    return state
      .filter((_, idx) => idx !== orderItemIdx)
  },
  'CHANGE_ORDER_ITEM_AMOUNT': (state, action) => {
    if (action.amount <= 0) return state

    const orderItemIdx = findOrderIndex(state, action.id)

    return state
      .map((orderItem, idx) => {
        if (idx !== orderItemIdx) return orderItem

        return {
          ...orderItem,
          amount: action.amount
        }
      })
  },
  'FETCH_ORDERS_SUCCESS': (state, action) =>
    Object.assign({}, state, {
      orders: action.orders
    })
}

export default reducerRegister(reducers, [])