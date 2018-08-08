import React from 'react'
import Menu from './containers/Menu'

export default [
  {
    path: '/menu',
    component: (props, factory) => 
      <Menu
        {...props}
        menuService={factory.get('menuService')}
        categoriesService={factory.get('categoriesService')}
      />
  }
]