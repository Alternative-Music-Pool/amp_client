import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import HomePage from './home/HomePage'
import BlogPage from './blog/BlogPage'

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
      </div>
    )
  }
}

export default App
