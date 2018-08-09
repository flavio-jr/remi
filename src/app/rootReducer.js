import { combineReducers } from 'redux'
import Menu from './common/reducers/menu'
import Fetch from './common/reducers/fetch'
import Order from './customer/reducers/order'

export default combineReducers({
  Menu,
  Fetch,
  Order
})
