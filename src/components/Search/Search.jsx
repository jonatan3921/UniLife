import React from 'react'
import './Search.css'
import { Link } from 'react-router-dom'


function Search({home, setQuery}) {

  return (
    <Link className='search-results-item' to={`/homedetails/${home?._id}`} onClick={() => setQuery('')}>
        <img src={home?.images[0]} alt="city-img" />
        <p>{home?.address?.street}, {home?.address?.city}, {home?.address?.postcode}</p>
        <p>£{home?.rent}</p>
    </Link>
  )
}

export default Search