import React from 'react'
import './CityCard.css'
import { Link } from 'react-router-dom'

function CityCard({city}) {
  return (
    <Link to={`/citydetails/${city?._id}`} className='city-card' style={{backgroundImage: `url(${city?.image_url})`}}>
        <h3>{city?.name}</h3>
        <p>{city?.property_count} properties</p>
    </Link>
  )
}

export default CityCard