import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {BsHouses} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'


function Header() {
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <BsHouses />
        <Link to={'/'}><h3>UniLife</h3></Link>
      </div>
      <div className='other-links'>
        <div className='shortlist-container'>
          <AiOutlineHeart />
          <Link to={'/'}><p>Shortlist</p></Link>
        </div>
        <div className='contactus-container'>
          <AiOutlineMail />
          <Link to={'/'}><p>Contact Us</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Header