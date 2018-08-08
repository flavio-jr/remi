import React, { Component } from 'react'
import CMenu from '../components/Menu'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Menu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      categories: []
    }
  }

  render () {
    return ( 
      <CMenu
        menuItems={this.props.menu}
        categories={this.state.categories}
      />
    )
  }

  componentDidMount () {
    const { categoriesService } = this.props

    categoriesService
      .list()
      .then(categories => {
        this.setState({
          categories: [
            ...this.state.categories,
            ...categories
          ]
        })
      })
  }
}

Menu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.isRequired,
      categoryId: PropTypes.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  categoriesService: PropTypes.shape({
    list: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = state => ({
  menu: state.Menu.items || []
})

export default withRouter(connect(mapStateToProps)(Menu))
