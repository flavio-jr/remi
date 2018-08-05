import React, { Component } from 'react';
import Routes from './Routes'
import './App.scss'
import Header from '@/app/common/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="app-content container is-fluid">
          {Routes()}
        </div>
      </div>
    )
  }
}

export default App;
