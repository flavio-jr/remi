import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Orders from '@/app/kitchen/components/Orders'
import { fetchOrders } from '@/domains/order/actions'

class Order extends Component {
  changeOrderStatus (orderId, newStatus) {
    const { ordersService, dispatch } = this.props

    ordersService
      .alter(orderId, {
        status: newStatus
      })
      .then(() => dispatch(fetchOrders(ordersService)))
  }

  render () {
    return (
      <Orders
        orders={this.props.orders}
        menu={this.props.menu}
        onOrderChange={this.changeOrderStatus.bind(this)}
      />
    )
  }

  componentDidMount() {
    this.props.dispatch(fetchOrders(this.props.ordersService))
  }
}

const mapStateToProps = state => ({
  orders: state.Order.orders || [],
  menu: state.Menu.items || []
})

export default withRouter(connect(mapStateToProps)(Order))