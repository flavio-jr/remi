import React, { Component } from 'react'
import CMenu from '../components/Menu'
import PropTypes from 'prop-types'

class Menu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      menu: [],
      categories: []
    }
  }

  render () {
    return <CMenu menuItems={this.state.menu} categories={this.state.categories} />
  }

  componentDidMount () {
    const menu = this
      .props
      .menuService
      .list()

    const categories = this
      .props
      .categoriesService
      .list()

    Promise.all([menu, categories])
      .then(([menuItems, categories ]) => {
        this.setState({
          menu: [
            ...this.state.menu,
            ...menuItems
          ],
          categories: [
            ...this.state.categories,
            ...categories
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
