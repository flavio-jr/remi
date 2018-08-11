import React from 'react'
import { Route } from 'react-router-dom'
import NotFoundPage from './app/common/pages/NotFound'

export default () => 
  <div>
    <Route component={NotFoundPage} />
  </div>