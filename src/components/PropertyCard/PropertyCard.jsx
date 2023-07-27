import React from 'react'
import "./PropertyCard.css"
import {MdOutlineBed} from 'react-icons/md'
import {MdOutlineBathtub} from 'react-icons/md'
import {IoLocationOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import {BsHouseDoor} from 'react-icons/bs'


function PropertyCard({property}) {
  return (
    <div className='property-card-container'>
        <img src={property?.images[0]} alt='property'/>
        <div className='property-info'>
            <div className='price-container'>
              <p>£{property?.rent}</p>
              <p>pppw including bills</p>
            </div>
            <div className='bed-bath'>
              <MdOutlineBed className='property-icon'/>
              <p>{property?.bedroom_count}</p>
              <MdOutlineBathtub className='property-icon' />
              <p>{property?.bathroom_count}</p>
            </div>
        </div>
        <div className='property-extra-info'>
          <div className='furnished-status'>
            <p>{property.property_type}</p>
            <p>{property?.furnished}</p>
          </div>
          <div className='location'>
            <IoLocationOutline className='address-icon'/>
            <p>{property?.address.street}, {property?.address.city}, {property?.address.postcode}</p>
          </div>
        </div>
        <Link to={`/homedetails/${property?._id}`} className="property-link">
          <BsHouseDoor className='house-icon'/>
          <p>View Home</p>
        </Link>
    </div>
  )
}

export default PropertyCard