import React from 'react'
import Menu from './containers/Menu'

export default [
  {
    path: '/menu',
    component: (props, factory) => 
      <Menu
        {...props}
        categoriesService={factory.get('categoriesService')}
        orderService={factory.get('ordersService')}
      />
  }
]