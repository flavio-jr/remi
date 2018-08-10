import React from 'react'
import './OrderButton.scss'

const OrderButton = ({ orderCount }) =>
  <button className="button is-primary is-large order-button">
    <i className="fa fa-concierge-bell"></i>
    <span className="order-counter has-background-danger">
      { orderCount }
    </span>
  </button>

export default OrderButton