import React, {useState} from 'react'
import './Contact.css'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'


function Contact() {
    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (query !== '') {
            alert('test');
        }
    }

  return (
    <div className='contact-container' onSubmit={handleSubmit}>
        <div className='email-container'>
            <h3>Keep in touch</h3>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <input type="email" placeholder='Your email' value={query} onChange={(e) => setQuery(e.target.value)} />
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