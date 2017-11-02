import React, { Component } from 'react'
import Banner from './banner'
import Main from './main'
import Footer from './footer'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default HomePage
