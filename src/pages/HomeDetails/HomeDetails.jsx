import React, {useState, useEffect} from 'react'
import './HomeDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {AiOutlineLeft} from 'react-icons/ai'
import {useNavigate } from 'react-router-dom'
import HomeImages from '../../components/HomeImages/HomeImages';
import {MdOutlineBed} from 'react-icons/md'
import {MdOutlineBathtub} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import BedroomPrices from '../../components/BedroomPrices/BedroomPrices'
import {AiOutlineCheck} from 'react-icons/ai'
import Modal from 'react-modal'
import {MdOutlineAddHomeWork} from 'react-icons/md'


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


function HomeDetails() {
    const {homeId} = useParams()
    const [home, setHome] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();

     

    useEffect(
        () => {
            axios.get(`https://unilife-server.herokuapp.com/properties/${homeId}`)
            .then(res => {
                setHome(res.data)
            })
            .catch(err => console.log(err))
        }, []
    )

    const goBack = () => {
        navigate(-1)
    }


    const fullAddress = home?.address?.street + ", " + home?.address?.city + ", " + home?.address?.postcode;
    const bedrooms = home?.bedroom_count;
    const bathrooms = home?.bathroom_count;
    const propertyType = home?.property_type;
    const price = home?.rent;
    const furnished = home?.furnished;
    const availability = home?.availability;

     
  return (
    <div className='homedetails-container'>
        <button onClick={goBack} className='return-link'>
            <AiOutlineLeft className='arrow-icon'/>
            <p>Back to Search</p>
        </button>
        <div className='homedetails'>
                <HomeImages key={home?._id} home={home}/>
                <div className='home-booking-info'>
                    <div className='main-home-info'>
                        <h2>{fullAddress}</h2>
                        <div className='home-details'>
                            <div className='home-detail-title'>
                                <p>Bedrooms</p>
                                <div className='bedrooms'>
                                    <MdOutlineBed className='bed-icon'/>
                                    <p className='bed-detail'>{bedrooms}</p>
                                </div>
                            </div>
                            <div className='home-detail-title'>
                                <p>Bathrooms</p>
                                <div className='bathrooms'>
                                    <MdOutlineBathtub className='bath-icon'/>
                                    <p className='bath-detail'>{bathrooms}</p>
                                </div>
                            </div>
                            <div className='home-detail-title'>
                                <p>Property Type</p>
                                <p className='home-detail'>{propertyType}</p>
                            </div>
                            <div className='home-detail-title'>
                                <p>Price</p>
                                <p className='price-detail'>£{price}</p>
                            </div>
                            <div className='home-detail-title'>
                                <p>Furnished type</p>
                                <p className='home-detail'>{furnished}</p>
                            </div>
                            <div className='home-detail-title'>
                                <p>Available from</p>
                                <p className='home-detail'>{availability}</p>
                            </div>
                        </div>
                    </div>
                    <div className='btns-container'>
                        <button className='shortlist-btn'>
                            <AiOutlineHeart className='shortlist-icon'/>
                            Shortlist
                        </button>
                        <button className='booking-btn' onClick={() => setIsOpen(true)}>Book Viewing</button>
                        <Modal
                        isOpen={isOpen}
                        onRequestClose={() => setIsOpen(false)}
                        style={customStyles}
                        contentLabel="Contact Us Modal"
                        >
                            <div className='modal-header'>
                                <h2>Book a Viewing</h2>
                                <MdOutlineAddHomeWork className='house-icon'/>
                            </div>
                            <p className='address-booking'>{fullAddress}</p>
                            <form className='modal-form'>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder='Enter your name'/>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder='Enter your email address'/>
                                <label htmlFor='phoneNumber'>Phone Number</label>
                                <input type='number' id='phoneNumber' placeholder='Enter your phone number'/>
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="4" placeholder='Enter your message'></textarea>
                                <button type="submit">Submit</button>
                            </div>
                            </form>
                        </Modal>
                    </div>
                </div>
                <div className='description-and-features'>
                    <div className='description-container'>
                        <h2>Description</h2>
                        <p>{home?.property_description}</p>
                    </div>
                    <div className='key-features-container'>
                        <h2>Key Features</h2>
                        {home?.key_features ?
                            home?.key_features.map((item) => (
                                <p className='feature'>
                                    <AiOutlineCheck className='check-icon'/>
                                    {item}
                                </p>
                            ))
                        : null
                        }
                    </div>
                </div>
                <div className='bedrooms-prices-container'>
                    <h2>Bedroom Prices</h2>
                    <div className='bedrooms-prices'>
                        <BedroomPrices key={home?._id} home={home}/> 
                    </div>
                </div>
        </div>
    </div>
  )
}

export default HomeDetails