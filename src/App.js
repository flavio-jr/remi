import React, { Component } from 'react';
import Routes from './Routes'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="container is-fluid">
        {Routes()}
      </div>
    )
  }
}

export default App;
