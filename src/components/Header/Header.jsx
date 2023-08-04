import React, {useState} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {BsHouses} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import Modal from 'react-modal'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    borderRadius: '12px'
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  }
};

Modal.setAppElement(document.getElementById('root'));

function Header() {
  const [isOpen, setIsOpen] = useState(false)


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
          <button onClick={() => setIsOpen(true)}>Contact Us</button>
          <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Contact Us Modal"
          >
              <div className='modal-header-contactus'>
                <h2>Contact Us</h2>
                <AiOutlineMail className='mail-icon'/>
                </div>
                <p className='contactus-text'>Feel free to contact us if you have any questions.
Looking forward to hear from you.</p>
                <form className='modal-form-contactus'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder='Enter your name'/>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input type='number' id='phoneNumber' placeholder='Enter your phone number'/>
                    <label htmlFor='select'>Are you a...</label>
                    <select id='select'>
                      <option value='Student'>Student</option>
                      <option value='Professor'>Professor</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder='Enter your email address'/>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="4" placeholder='Enter your message'></textarea>
                    <button type="submit">Submit</button>
                </div>
                </form>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Header