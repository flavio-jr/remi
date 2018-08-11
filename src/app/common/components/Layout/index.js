import React from 'react'
import Header from '@/app/common/components/Header'
import Spinner from '@/app/common/components/Spinner'

const Layout = ({ children }) =>
  <div>
    <Spinner />
    <Header />
    <div className="app-content container is-fluid">
      { children }
    </div>
  </div>

export default Layout