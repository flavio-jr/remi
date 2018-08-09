import reducerRegister from '@/support/utils/reducer/register'

let countFetchers = 0;

const reducers = {
  'IS_FETCHING': state => {
    countFetchers++
    return Object.assign({}, state, {
      isFetching: true,
    })
  },
  'DONE_FETCHING': state => {
    countFetchers--

    if (!countFetchers) {
      countFetchers = 0

      return Object.assign({}, state, {
        isFetching: false
      })
    }

    return state
  }
}

export default reducerRegister(reducers, {
  isFetching: false
})