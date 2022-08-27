import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Card.css'

const Card = ({ emoji, heading, detail, color }) => {
  //here i check for each type of event and i assign a className to futher put img css as cover

  return (
    <div className='card' style={{ borderColor: { color } }}>
      <div>
        <span>{heading}</span>
        <span>{detail}</span>
      </div>
    </div>
  )
}

export default Card
