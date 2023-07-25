import React from 'react'
import "./PropertyCard.css"

function PropertyCard({property}) {
  return (
    <div className='property-card-container'>
        <img src={property?.images[0]}/>
        <div className='property-info'>
            <p>£{property?.rent}</p>
            <p>pppw including bills</p>
            <div className='bed-bath'>
            </div>
        </div>
    </div>
  )
}

export default PropertyCard