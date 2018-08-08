import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export default class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isActiveDropDown: false
    }
  }

  render () {
    return (
      <nav className="navbar is-info is-fixed-top">
        <div className="navbar-brand">
          <h1 className="is-size-4 navbar-item app-name">
            R E M I
          </h1>
          <a className="navbar-burger" onClick={() => { this.setState({isActiveDropDown: !this.state.isActiveDropDown}) }}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={"navbar-menu " + (this.state.isActiveDropDown ? 'is-active' : '')}>
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Manage
              </a>
              <div className="navbar-dropdown">
                <Link to='/menu' className="navbar-item">
                  Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}