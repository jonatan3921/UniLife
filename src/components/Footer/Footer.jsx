import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import {LiaCopyrightSolid} from 'react-icons/lia'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='main-links'>
        <Link to={'/'}>About Us</Link>
        <Link to={'/'}>Terms & Conditions</Link>
        <Link to={'/'}>Privacy & Cookie Policies</Link>
      </div>
      <div className='other-info'>
        <p>2022</p>
        <LiaCopyrightSolid />
        <p>UniLife</p>
      </div>
    </div>
  )
}

export default Footer