import React from 'react'
import PropTypes from 'prop-types'
import './OrderButton.scss'

const OrderButton = ({ orderCount, onClick }) =>
  <button className="button is-primary is-large order-button" onClick={() => onClick()}>
    <i className="fa fa-concierge-bell"></i>
    <span className="order-counter has-background-danger">
      { orderCount }
    </span>
  </button>

OrderButton.propTypes = {
  orderCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default OrderButton