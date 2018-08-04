import React from 'react'
import Menu from './containers/Menu'

export default [
  {
    path: '/menu',
    component: ({ menuService }) => {
      return <Menu menuService={menuService} />
    }
  }
]