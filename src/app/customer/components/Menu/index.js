import React from 'react'
import MenuOption from '../MenuOption'
import PropTypes from 'prop-types'

const itemRender = item => (
  <div className="column is-one-third">
    <MenuOption key={item.id} {...item} />
  </div>
)

const Menu = ({ menuItems }) =>
  <div className="menu">
    <div className="columns is-multiline">
      { menuItems.map(item => itemRender(item)) }
    </div>
  </div>

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      categoryId: PropTypes.isRequired
    }).isRequired
  ).isRequired
}

export default Menu