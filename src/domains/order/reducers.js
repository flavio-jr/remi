import reducerRegister from '@/support/utils/reducer/register'

const findOrderById = id => orderItem => orderItem.id === id

const findOrder = (state, id) => state.find(findOrderById(id))
const findOrderIndex = (state, id) => state.findIndex(findOrderById(id))

const reducers = {
  'ADD_TO_ORDER': (state, action) => {
    if (findOrder(state.current, action.id)) {
      return state
    }

    return Object.assign({}, state, {
      current: [
        ...state.current,
        {
          id: action.id,
          amount: 1
        }
      ]
    })
  },
  'REMOVE_FROM_ORDER': (state, action) => {
    const orderItemIdx = findOrderIndex(state.current, action.id)

    if (orderItemIdx === -1) {
      return state
    }

    return {
      ...state,
      current: state
        .current
        .filter((_, idx) => idx !== orderItemIdx)
    }
  },
  'CHANGE_ORDER_ITEM_AMOUNT': (state, action) => {
    if (action.amount <= 0) return state

    const orderItemIdx = findOrderIndex(state.current, action.id)

    const newCurrent = state
      .current
      .map((orderItem, idx) => {
        if (idx !== orderItemIdx) return orderItem

        return {
          ...orderItem,
          amount: action.amount
        }
      })

    return Object.assign({}, state, {
      current: newCurrent
    })
  },
  'FETCH_ORDERS_SUCCESS': (state, action) =>
    Object.assign({}, state, {
      orders: action.orders
    }),
  'RESET_CURRENT_ORDER': state =>
    Object.assign({}, state, {
      current: []
    })
}

export default reducerRegister(reducers, { current: [] })