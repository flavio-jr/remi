import reducerRegister from '@/support/utils/reducer/register'

const reducers = {
  'ADD_TO_ORDER': (state, action) => {
    if (state.find(order => order.id === action.id)) {
      return state
    }

    return [
      ...state,
      {
        id: action.id,
        amount: 0
      }
    ]
  }
}

export default reducerRegister(reducers, [])