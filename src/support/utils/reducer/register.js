export default (reducers, initialState) =>
  ( state = initialState, action ) => {
    const { type } = action

    if (type in reducers) {
      return reducers[type](state, action)
    }

    return state  
  }