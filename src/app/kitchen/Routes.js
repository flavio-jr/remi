import React from 'react'
import Order from './containers/Order'
import factory from '@/support/factories'

export default [
  {
    path: '/orders',
    component: () => <Order ordersService={factory.get('ordersService')}/>
  }
]