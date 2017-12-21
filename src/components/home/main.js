import React from 'react'
import AudioCard from './card'

const Main = () => {
  return (
    <div className="main-wrap main">
      <div className="content-main text-center">
        <div className="main__header">
          <header>A DISK JOKEY ONE STOP SHOP FOR ALTERNATIVE EDITS</header>
        </div>
        <div className="main__subheader">
          <h2>THIS MONTHS TOP MOVERS</h2>
        </div>
        <AudioCard title="First mp3"/>
        <AudioCard title="Second mp3"/>
        <AudioCard title="Third mp3"/>
        <AudioCard title="4th mp3"/>
        <div className="main__card member">
          <h1 className="main__card_header">
            <strong>BECOME A MEMBER</strong>
          </h1>
          <div className="main__button">
            <button className="btn btn-secondary">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
