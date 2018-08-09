import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import Routes from './Routes'
import './App.scss'
import Header from '@/app/common/components/Header'
import Spinner from '@/app/common/components/Spinner'
import { fetchMenuItems } from '@/app/common/actions/menu'
import factory from '@/support/factories'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Spinner />
        <Header />
        <div className="app-content container is-fluid">
          <Switch>
            { Routes(this.props.store) }
          </Switch>
        </div>
      </div>
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
