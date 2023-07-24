import React from 'react'
import './Contact.css'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'


function Contact() {
  return (
    <div className='contact-container'>
        <div className='email-container'>
            <h3>Keep in touch</h3>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <input type="email" placeholder='Your email'/>
        </div>
        <div className='social-media-container'>
            <h3>Let's Socialize</h3>
            <div className='social'>
                <FaFacebook className='social-icon'/>
                <a href='/'>Facebook</a>
            </div>
            <div className='social'>
                <AiFillTwitterCircle className='social-icon'/>
                <a href='/'>Twitter</a>
            </div>
            <div className='social'>
                <AiFillInstagram className='social-icon'/>
                <a href='/'>Instagram</a>
            </div>
        </div>
    </div>
  )
}

export default Contact