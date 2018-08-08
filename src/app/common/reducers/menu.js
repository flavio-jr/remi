const reducers = {
  'FETCH_MENU': state =>
    Object.assign({}, state, {
      loading: true
    }),
  'FETCH_MENU_SUCCESS': (state, action) =>
    Object.assign({}, state, {
      loading: false,
      items: action.menu
    }),
  'FETCH_MENU_FAILURE': (state) =>
    Object.assign({}, state, {
      failureRequest: true
    })
}

export default (
  state = {
    items: [],
    loading: false,
    failureRequest: false
  },
  action
) => {
  const { type } = action

  if (type in reducers) {
    return reducers[type](state, action)
  }

  return state
}