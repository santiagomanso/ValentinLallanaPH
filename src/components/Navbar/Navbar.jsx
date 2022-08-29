import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'
const navbar = () => {
  return (
    <div className='n-wrapper' id='Navbar'>
      {/* left */}
      <div className='n-left'>
        <div className='n-name'>Valentin</div>
        <Toggle />
      </div>
      {/* right */}
      <div className='n-right'>
        <nav className='n-list'>
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <Link to='Navbar' spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to='services' spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to='testimonial' spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link to='contact' spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default navbar
