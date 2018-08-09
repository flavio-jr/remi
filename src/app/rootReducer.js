import { combineReducers } from 'redux'
import Menu from './common/reducers/menu'
import Fetch from './common/reducers/fetch'

export default combineReducers({
  Menu,
  Fetch
})
