import React, { Component } from 'react'
import CMenu from '../components/Menu'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { isFetching, doneFetching } from '@/app/common/actions/fetch'

class Menu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      categories: []
    }
  }

  render () {
    if (this.state.categories.length && this.props.menu.length) {
      return ( 
        <CMenu
          menuItems={this.props.menu}
          categories={this.state.categories}
        />
      )
    }

    return <div></div>
  }

  componentDidMount () {
    const { categoriesService, dispatch } = this.props

    dispatch(isFetching())

    categoriesService
      .list()
      .then(categories => {
        dispatch(doneFetching())
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
