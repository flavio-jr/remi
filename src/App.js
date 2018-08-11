import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import PageRoutes from './PageRoutes'
import './App.scss'
import { fetchMenuItems } from '@/domains/menu/actions'
import factory from '@/support/factories'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        { AppRoutes(this.props.store) }
        { PageRoutes() }
      </Switch>
    )
  }

  componentDidMount () {
    const { dispatch } = this.props

    dispatch(fetchMenuItems(factory.get('menuService')))
  }
}

const mapStateToProps = state => {
  const { Menu } = state

  const {
    items: menu,
    loading
  } = Menu || {
    loading: false,
    items: []
  }

  return {
    Menu,
    menu,
    loading
  }
}

export default withRouter(connect(mapStateToProps)(App))
