import React from 'react'

const AudioCard = (props) => {
  return (
      <div className="main__card">
        <div className="card__img">
          <img src="../../assets/mp3image.jpg" alt="mp3 photo"/>
        </div>
        <div className="card__header">
          <h2>{props.title}</h2>
        </div>
        <div className="card__audio">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
  )
}

export default AudioCard
