import React, {useState, useEffect} from 'react'
import './HomeDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {AiOutlineLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import HomeImages from '../../components/HomeImages/HomeImages';
import {MdOutlineBed} from 'react-icons/md'
import {MdOutlineBathtub} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'

function HomeDetails() {
    const {homeId} = useParams()
    const [home, setHome] = useState({})

     

    useEffect(
        () => {
            axios.get(`https://unilife-server.herokuapp.com/properties/${homeId}`)
            .then(res => {
                setHome(res.data)
            })
            .catch(err => console.log(err))
        }
    )

    const fullAddress = home.address?.street + ", " + home.address?.city + ", " + home.address?.postcode;
    const bedrooms = home.bedroom_count;
    const bathrooms = home.bathroom_count;
    const propertyType = home.property_type;
    const price = home.rent;
    const furnished = home.furnished;
    const availability = home.availability;
     
  return (
    <div className='homedetails-container'>
        <Link to={'/'} className='return-link'>
            <AiOutlineLeft className='arrow-icon'/>
            <p>Back to Search</p>
        </Link>
        <div className='homedetails'>
            <div className='homedetails-description'>
                <div className='home-images'>
                    <HomeImages key={home._id} home={home}/>
                </div>

            </div>
            <div className='home-info'>
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
                    <button className='booking-btn'>Book Viewing</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeDetails