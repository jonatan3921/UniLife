import React from 'react'
import './CityCard.css'

function CityCard({city}) {
  return (
    <div className='city-card' style={{backgroundImage: `url(${city?.image_url})`}}>
        <h3>{city?.name}</h3>
        <p>{city?.property_count} properties</p>
    </div>
  )
}

export default CityCard