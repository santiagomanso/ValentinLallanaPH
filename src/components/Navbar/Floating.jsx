import React, { useState } from 'react'
import './Floating.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiSuitcaseLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { Link } from 'react-scroll'

const Floating = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav className='phone-nav'>
      <Link
        to='Navbar'
        smooth={true}
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </Link>
      <Link
        to='services'
        spy={false}
        smooth={true}
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </Link>
      <a
        href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href='#portfolio'
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <RiSuitcaseLine />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Floating
