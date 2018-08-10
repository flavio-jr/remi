import { combineReducers } from 'redux'
import Menu from './menu/reducers'
import Fetch from './common/reducers/fetch'
import Order from './order/reducers'

export default combineReducers({
  Menu,
  Fetch,
  Order
})
