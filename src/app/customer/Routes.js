import React from 'react'
import Menu from './containers/Menu'

export default [
  {
    path: '/menu',
    component: ({ menuService, categoriesService }) => {
      return <Menu
        menuService={menuService}
        categoriesService={categoriesService}
      />
    }
  }
]