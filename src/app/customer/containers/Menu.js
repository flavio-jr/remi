import React, { Component } from 'react'
import CMenu from '../components/Menu'
import PropTypes from 'prop-types'

class Menu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      menu: []
    }
  }

  render () {
    return <CMenu menuItems={this.state.menu} />
  }

  componentDidMount () {
    this
      .props
      .menuService
      .list()
      .then(menu => {
        this.setState({
          menu: [
            ...this.state.menu,
            ...menu
          ]
        })
      })
  }
}

Menu.propTypes = {
  menuService: PropTypes.shape({
    list: PropTypes.func.isRequired
  })
}

export default Menu
