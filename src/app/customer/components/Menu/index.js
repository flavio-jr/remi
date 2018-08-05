import React from 'react'
import MenuOption from '../MenuOption'
import PropTypes from 'prop-types'
import './Menu.scss'

const itemRender = item => (
  <div key={item.id} className="column is-one-third">
    <MenuOption {...item} />
  </div>
)

const menuByCategory = menu =>
  menu
    .reduce((newMenu, item) => {
      const {categoryId} = item

      newMenu[categoryId] = (categoryId in newMenu) ?
        [
          ...newMenu[categoryId],
          item
        ] :
        [item]

      return newMenu
    }, {})

const categoryFinder = (id, categories) =>
  categories
    .find(category => category.id === id)

const Menu = ({ menuItems, categories }) => {
  const CategoryMenu = menuByCategory(menuItems)

  return (
    <div className="menu">
      {
        Object
          .keys(CategoryMenu)
          .map(id =>
            (
              <div key={id}>
                <h1 className="columns has-text-centered category is-mobile">
                  <div className="column">
                    <hr className="has-background-grey-lighter" />
                  </div>
                  <div className="column is-2-desktop">
                    <span className="is-block name">
                      { categoryFinder(parseInt(id, 10), categories).name }
                    </span>
                  </div>
                  <div className="column">
                    <hr className="has-background-grey-lighter" />
                  </div>
                </h1>
                <div className="columns is-multiline">
                  { CategoryMenu[id].map(item => itemRender(item)) }
                </div>
              </div>
            )
          )
        }
    </div>
  )
}

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      categoryId: PropTypes.isRequired
    }).isRequired
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Menu