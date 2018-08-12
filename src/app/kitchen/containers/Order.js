import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Orders from '@/app/kitchen/components/Orders'
import { fetchOrders } from '@/domains/order/actions'

class Order extends Component {
  render () {
    return (
      <Orders
        orders={this.props.orders}
        menu={this.props.menu}
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