import React, { useState } from 'react'
import './Floating.css'
import { AiOutlineHome, AiOutlineStar, AiFillFolderOpen } from 'react-icons/ai'
import { GrGallery } from 'react-icons/gr'
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
        smooth={true}
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiFillFolderOpen />
      </Link>
      <Link
        to='testimonial'
        smooth={true}
        onClick={() => setActiveNav('#testimonial')}
        className={activeNav === '#testimonial' ? 'active' : ''}
      >
        <AiOutlineStar />
      </Link>
      <Link
        to='contact'
        smooth={true}
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <AiOutlineHome />
      </Link>
    </nav>
  )
}

export default Floating
