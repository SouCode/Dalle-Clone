// Dalle-Clone/src/components/Card.jsx
import React from 'react'

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className='card'>
      <img src={photo} alt={name} className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title'>{prompt}</h5>
      </div>
    </div>
  )
}


export default Card
