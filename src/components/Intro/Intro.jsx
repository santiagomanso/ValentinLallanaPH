import React, { useContext } from 'react'
import './Intro.css'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import glassesimoji from '../../img/glassesimoji.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import FloatinDiv from '../FloatingDiv/FloatingDiv'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: 'spring' }

  // context
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='Intro' id='Intro'>
      {/* left name side */}
      <div className='i-left'>
        <div className='i-name'>
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? 'white' : '' }}>Hi there! I'm</span>
          <span>Valentin Lallana</span>
          <span>
            Berlin-based photographer with a passsion for transmitting emotions
            through my lenses.
          </span>
        </div>
        <Link to='services' smooth={true} spy={true}>
          <button className='button i-button'>my albums!</button>
        </Link>
        {/* social icons */}
        <div className='i-icons'>
          <a
            href='http://www.linkedin.com/in/valentinLallana'
            target='_blank'
            rel='noreferrer'
          >
            <img src={LinkedIn} alt='' />
          </a>
          <a
            href='https://www.instagram.com/valen.img/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Instagram} alt='' />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className='i-right'>
        <img src={Vector1} alt='' />
        <img src={Vector2} alt='' />
        <img src={boy} alt='' />
        {/* animation */}
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt=''
        />

        <motion.div
          initial={{ top: '-4%', left: '94%' }}
          whileInView={{ left: '50%' }}
          transition={transition}
          className='floating-div'
        >
          <FloatinDiv img={crown} text1='Photographer' text2='' />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: '9rem', top: '18rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          className='floating-div'
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1='Excellent' text2='Service' />
        </motion.div>

        <div className='blur' style={{ background: 'rgb(238 210 255)' }}></div>
        <div
          className='blur'
          style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        ></div>
      </div>
    </div>
  )
}

export default Intro
