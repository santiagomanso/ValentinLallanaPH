import React, { useContext } from 'react'
import './Services.css'
import Card from '../Card/Card'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
import Resume from './resume.pdf'
import Modal from '../Modal/Modal'
import { useState } from 'react'

const Services = () => {
  const [open, setOpen] = useState(false)

  const handlerModal = () => {
    setOpen(true)
  }
  // context
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  // transition
  const transition = {
    duration: 1,
    type: 'spring',
  }

  return (
    <div className='services' id='services'>
      {/* left side */}
      <div className='awesome'>
        {/* dark mode */}
        <span style={{ color: darkMode ? 'white' : '' }}>Portfolio</span>
        <span>Albums</span>
        <spane>
          Here is my new collection of recents event i attended
          <br />
          You will also find some cool outdoor shoots!
        </spane>
        <a href={Resume} download>
          <button className='button s-button'>Download CV</button>
        </a>
        <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
      </div>
      {/* right */}
      <div className='cards'>
        {/* first card */}
        <motion.div
          onClick={handlerModal}
          initial={{ left: '25rem' }}
          whileInView={{ left: '20rem', top: '-0.4rem' }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={'Urban'}
            detail={'Awsome footage from Berlin, Prague, London among others!'}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          onClick={handlerModal}
          initial={{ left: '-11rem', top: '12rem' }}
          whileInView={{ left: '-5rem' }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={'Nature'}
            detail={
              'Some of my best pictures i took while traveling through europe'
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: '24rem', left: '20rem' }}
          whileInView={{ left: '15rem', top: '65%' }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={'Sports'}
            detail={'Tennis club, marathons & Surfing'}
            color='rgba(252, 166, 31, 0.45)'
          />
        </motion.div>
        <div
          className='blur s-blur2'
          style={{ background: 'var(--purple)' }}
        ></div>
      </div>
      <Modal open={open} close={() => setOpen(false)}>
        <span>la caca</span>
      </Modal>
    </div>
  )
}

export default Services
