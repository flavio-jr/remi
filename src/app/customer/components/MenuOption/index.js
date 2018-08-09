import React from 'react'
import PropTypes from 'prop-types'
import './MenuOption.scss'

const MenuOption = ({ id, name, price, onClick }) =>
  <div className="card clickable option-selectable" onClick={() => onClick(id)}>
    <div className="card-content">
      <div className="content">
        <h1 className="title">
          {name}
        </h1>
        <span className="subtitle is-block has-text-right">
          R$ {price}
        </span>
      </div>
    </div>
  </div>

MenuOption.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default MenuOption