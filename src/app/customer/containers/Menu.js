import React, { Component } from 'react'
import CMenu from '../components/Menu'
import OrderButton from '../components/OrderButton'
import OrderModal from '../components/Order'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { isFetching, doneFetching } from '@/domains/common/actions/fetch'
import { addToOrder, removeFromOrder, changeOrderItemAmount } from '@/domains/order/actions'

class Menu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      categories: [],
      showOrder: false
    }
  }

  toggleOrderItem (item) {
    const { dispatch } = this.props

    const findItemInOrder = this
      .props
      .order
      .find(orderItem => orderItem.id === item)

    if (findItemInOrder) {
      return dispatch(removeFromOrder(item))
    }

    dispatch(addToOrder(item))
  }

  changeOrderItemAmount (id, value) {
    this.props.dispatch(changeOrderItemAmount(id, value))
  }

  toggleOrderModal () {
    this.setState({
      showOrder: !this.state.showOrder
    })
  }

  render () {
    if (this.state.categories.length && this.props.menu.length) {
      const orderCount = this.props.order.length

      return (
        <div>
          <OrderModal
            order={this.props.order}
            menu={this.props.menu}
            showModal={this.state.showOrder}
            onClose={this.toggleOrderModal.bind(this)}
            onRemoveItem={this.toggleOrderItem.bind(this)}
            onAmountChange={this.changeOrderItemAmount.bind(this)}
          />
          <CMenu
            menuItems={this.props.menu}
            categories={this.state.categories}
            onOptionSelected={this.toggleOrderItem.bind(this)}
            order={this.props.order}
          />
          {orderCount && (
            <OrderButton orderCount={orderCount} onClick={this.toggleOrderModal.bind(this)}/>
          )}
        </div>
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
  menu: state.Menu.items || [],
  order: state.Order
})

export default withRouter(connect(mapStateToProps)(Menu))
