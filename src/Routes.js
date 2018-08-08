import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Factory from '@/support/factories'
import CustomerRoutes from './app/customer/Routes'

/**
 * All the application routes
 * To add a domain route just put like
 * this: ...DomainRoutes
 */
const routes = [
  ...CustomerRoutes
]

export default store => 
  [
    ...routes.map((route, idx) => (
      <Route
        key={idx}
        exact
        path={route.path}
        render={ props => route.component({ ...props, store: store}, Factory) }
      />
    )),
    (
      <Redirect
        key="redirect"
        exact
        from="/"
        to="/menu"
      />
    )
  ]