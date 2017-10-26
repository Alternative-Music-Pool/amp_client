import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import HomePage from './home/HomePage'

class App extends Component {
  render() {
    return (
      <div className="wrapper container-fluid">
        <HomePage />
      </div>
    )
  }
}

export default App
