import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Card.css'
import Modal from '../Modal/Modal'

const Card = ({ heading, detail, color }) => {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)

  const handlerModal = (album) => {
    setOpen(true)
  }

  //here i check for each type of event and i assign a className to futher put img css as cover

  return (
    <>
      <div
        onClick={() => {
          setActive(true)
          handlerModal()
        }}
        className={`card ${heading}`}
        style={{ borderColor: { color } }}
      >
        <div>
          <span>{heading}</span>
          <span>{detail}</span>
        </div>
      </div>

      {active ? (
        <Modal open={open} close={() => setOpen(false)} albumType={heading}>
          <span>la caca</span>
        </Modal>
      ) : null}
    </>
  )
}

export default Card
